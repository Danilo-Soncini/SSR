const express =  require('express');
const React = require('react');
const { renderToString } = require('react-dom/server')
const Home = require('./client/components/Home').default
const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
})

app.listen(9841, () => {
  console.log('Listening on port 9841')
})