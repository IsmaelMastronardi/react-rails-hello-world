import "@hotwired/turbo-rails";
import "./controllers";
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store"; // Make sure the path is correct
import { BrowserRouter } from "react-router-dom";

console.log('2')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
