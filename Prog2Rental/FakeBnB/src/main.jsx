import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Errorpage from './sites/Errorpage.jsx'
import Mieten from './sites/Mieten.jsx'
import SignIn from './sites/SignIn.jsx'
import Login from './sites/Login.jsx'
import About from './sites/About.jsx'
import ThankYou from './sites/ThankYou.jsx'
import Sorry from './sites/Sorry.jsx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/rent", element: <Mieten /> },
        { path: "/about", element: <About /> },
        { path: "/purchasedone", element: <ThankYou /> },
        { path: "/purchasefailed", element: <Sorry /> },
      ],
      errorElement: <Errorpage />,
    },
    {
      path: "/register",
      element:<SignIn />
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
