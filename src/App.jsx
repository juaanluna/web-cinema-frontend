import {GlobalStyle} from'./App.style';

import React from 'react';
import Routes from './routes';

const App = () => (
  <div className="App">
    <GlobalStyle/>
    <Routes />
  </div>
);

export default App;
