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
import DonationDetails from './components/Donation/DonationDetails';
import DonationCard from './components/Donation/DonationCard';
import Donations from './components/Donation/Donations';
import ErrorPage from './components/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
      path:"/",
      loader : () => fetch('/data.json'),
      element : <Home></Home>,
      
    },
    {
      path:"/donation",
      element : <Donations></Donations>
    },
    {
      path:"/statistics",
      element : <Statistics></Statistics>,
      loader : () => fetch('/data.json'),
    },
    {
      path: "/donationshow/:id",
      element : <DonationCard></DonationCard>,
      loader : () => fetch('/data.json'),
    },
    
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
