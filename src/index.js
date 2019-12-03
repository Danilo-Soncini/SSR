import express from 'express';
import renderer from './helpers/renderer'
const PORT = 9841;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` )
})