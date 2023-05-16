import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './allpages/Products';
import Newproduct from './allpages/Newproduct';
import Contact from './allpages/Contact';

import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

const router=createBrowserRouter([
  {
      path:"/",
      element:<App/>
  },
  {
     path:"/product" ,
     element:<Product/>
  },
  {
    path:"/Newproduct",
    element:<Newproduct/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
