import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = ({ staticContext = {} }) => { 
  staticContext.notFound = true;
  return (
  <div>
    <p>Ops! Pagina não encontrada</p>
    <Link to='/'>Voltar para o inicio</Link>
  </div>
  );
}

export default {
  component : NotFoundPage
}