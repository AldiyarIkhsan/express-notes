const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const notesRouter = require("./routes/notes");
const authRouter = require("./routes/auth");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

// Роуты для авторизации
app.use("/auth", authRouter);

// Защищенные роуты для заметок
app.use("/notes", authMiddleware, notesRouter);

// Обработчик ошибок
app.use(errorHandler);

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Маршрут не найден" });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
