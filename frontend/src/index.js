import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {AuthContextProvider} from "./context/AuthContext"



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <AuthContextProvider>

    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
    </AuthContextProvider>

  </React.StrictMode>
  </BrowserRouter>,

  document.getElementById('root')
);
