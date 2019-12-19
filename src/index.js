import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';


const PORT = 3000;
const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = `localhost:${PORT}`;
    return opts
  }
}));

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);
  const { path } = req;
  const promises = matchRoutes(Routes, path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context)
    if(context.notFound){
      res.status(404);
    }
    res.send(content);
  })  
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` )
})