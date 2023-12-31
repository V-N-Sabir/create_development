import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'


//import App from './App';

import { Provider } from 'react-redux';
import {store} from './redux/store'

//import FotterIndex from "./components/Fotter"

import LoadingIndex from './components/loadingIndex/LoadingIndex';
//import MainSkeleton from './components/SkeletonSlayd';
import './index.css'
const  App = React.lazy( () => import(/* webpackChunkName: "App" */ "./App"))
//const  FotterIndex = React.lazy( () => import(/* webpackChunkName: "FotterIndex" */ "./components/Fotter"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Suspense fallback={<LoadingIndex />}><App /></React.Suspense>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

