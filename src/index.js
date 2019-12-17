import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const PORT = 9841;
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  const { path } = req;
  
  const promises = matchRoutes(Routes, path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() =>{
    res.send(renderer(req, store));
  })  
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` )
})