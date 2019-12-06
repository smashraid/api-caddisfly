import app from './app';
import logger from './utils/logger';

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.debug('Express server listening on port ' + PORT);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});