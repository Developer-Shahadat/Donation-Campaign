import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
      {
      path:"/",
      loader : () => fetch('/data.json'),
      element : <Home></Home>,
      
    },
    {
      path:"/donation",
      element : <Donation></Donation>
    },
    {
      path:"/statistics",
      element : <Statistics></Statistics>
    }
    
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
