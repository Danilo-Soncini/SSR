import React from 'react';

const Home = () => {
  return (
  <div>
    <p>I'm the Home Component</p>
    <button onClick={ () => { console.log('Hi, there')} }>Press me</button>
  </div>
  );
}

export default {
  component : Home
}