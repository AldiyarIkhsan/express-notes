const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../config/db");
const { generateTokens, verifyRefreshToken } = require('../config/jwt');

const router = express.Router();

// Регистрация
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Проверяем, существует ли пользователь
    const userExists = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'Пользователь уже существует' });
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаем пользователя
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, hashedPassword]
    );

    const user = result.rows[0];
    const { accessToken, refreshToken } = generateTokens(user);

    res.status(201).json({
      message: 'Пользователь успешно зарегистрирован',
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        username: user.username
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при регистрации' });
  }
});

// Логин
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Ищем пользователя
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Неверные учетные данные' });
    }

    const user = result.rows[0];

    // Проверяем пароль
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Неверные учетные данные' });
    }

    const { accessToken, refreshToken } = generateTokens(user);

    res.json({
      message: 'Успешный вход',
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        username: user.username
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при входе' });
  }
});

// Обновление токена
router.post("/refresh", async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh токен не предоставлен' });
    }

    const decoded = verifyRefreshToken(refreshToken);

    if (!decoded) {
      return res.status(401).json({ message: 'Неверный или истекший refresh токен' });
    }

    // Получаем пользователя из базы данных
    const result = await pool.query(
      'SELECT id, username FROM users WHERE id = $1',
      [decoded.userId]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Пользователь не найден' });
    }

    const user = result.rows[0];
    const tokens = generateTokens(user);

    res.json({
      message: 'Токены обновлены',
      ...tokens
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при обновлении токена' });
  }
});

// Выход из системы
router.post("/logout", (req, res) => {
  // В JWT нет необходимости в серверном logout
  // Клиент должен удалить токены на своей стороне
  res.json({ message: "Успешный выход из системы" });
});

module.exports = router;
