const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const notesRouter = require('./routes/notes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

app.use('/notes', notesRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: 'Маршрут не найден' });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
