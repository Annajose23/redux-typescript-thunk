import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, Store} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { ArticleAction, ArticleState,DispatchType } from './types';
import reducer from './store/reducer';

const store:Store<ArticleState, ArticleAction> & {
  dispatch:DispatchType
} = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
