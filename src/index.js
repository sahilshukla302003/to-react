import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContextProvider } from './context';
import App from './App';



ReactDOM.render(
  <TodoContextProvider>
       <App />
  </TodoContextProvider>,
  document.getElementById('root')
);


