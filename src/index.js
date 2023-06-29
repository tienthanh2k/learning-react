import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss'
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './components/stores/reducers/rootReducer.js';

const reduxStore = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
