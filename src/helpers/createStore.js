import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';



export default (req) =>{
  const  axiosInstace = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie : req.get('cookie') || '' }
  });
  const store = createStore(reducers,{}, applyMiddleware(thunk.withExtraArgument(axiosInstace)));
  return store;
}