import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const PORT = 9841;
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();


  res.send(renderer(req, store));
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` )
})