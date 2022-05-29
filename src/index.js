import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <App />
          </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

