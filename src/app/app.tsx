import {AutenticadoProvide} from 'context/authetication';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {WebRotas} from 'routes/app.routes';

export const App = () => {
  return (
    <AutenticadoProvide>
      <BrowserRouter>
        <WebRotas />
      </BrowserRouter>
    </AutenticadoProvide>
  );
};
