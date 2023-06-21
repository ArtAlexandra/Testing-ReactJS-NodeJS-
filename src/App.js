import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  Routes,
  Route,
  Navigate,
 
} from "react-router-dom";

import React, {useContext} from 'react';




import DoTest from "./TakeTest/DoTest";




import Users from './Users/Users';
import Result from "./Result/Result";
import Come from "../src/Main/Login/Come";


import LookResultTest from "./Main/LookResultTest";

import Form from "./TakeTest/Form";
import FormCreateTest from "./CreateTest/FormCreateTest";
import Navibar from "./Main/Navibar";
import Footer from "./Main/Footer";
import FormPassedTest from "./Result/FormPassedTest";
import ErrorURL from "./ErrorURL";

import { AuthContext } from "./context/authContext";
import NavBarUsers from "./Main/NavBarUsers";
import TestList from "./Main/Tests/TestList";

const Layout = () => {
  return (
    <>
     <Navibar/>
      <Outlet />
     <Footer/>
    </>
  );
};

const LayoutUser = () => {
  return (
    <>
    <NavBarUsers/>
      <Outlet />
      <Footer />
    </>
  );
};

const Login = () => {
  return (
    <>
   
      <Outlet />
     
    </>
  );
};


const login = createBrowserRouter([
  {
    path:"/",
    element: <Login/>,
    children: [
      {
        path: "/come",
        element: <Come/>
      }
    ]
  },
  {
    path:"*",
  element: <Navigate to="/come" />
  }
])
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     
      {
        path: "/",
        element: <Navigate to="/test" />
      },
      {
        path: "/test",
        element: <TestList/>
      },
      {
        path: "/result",
        element: <Result />
      },
      {
        path: "/user",
        element: <Users />,
      },
      {
        path: "/LookResultTest",
        element: <LookResultTest/>
      },
      {
        path: "/passing",
         element: <Form/>
      },
      {
        path: "result/passingtest",
        element: <FormPassedTest/>
      },
      {
        path:"/DoTest",
        element:<DoTest/>
      },
     
      {
        path: "test/createTest",
        element: <FormCreateTest/>
      },
      
    ],
  },
  {
    path: "/come",
    element: <Come />,
  },
  {
    path: "*",
    element:<ErrorURL/>
  },
  
]);

const routerUser = createBrowserRouter([
  {
    path: "/",
    element: <LayoutUser/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/test" />
     
      },
      {
        path: "/test",
        element: <LookResultTest/>
      },
      {
        path: "test/passing",
         element: <Form/>
      },
     
     
     
    ],
  },
  {
    path: "*",
    element: <Navigate to="/test" />
  },
  {
    path: "/come",
    element: <Come />,
  },
]);

export default function App() {
  /*
  const { currentUser} = useContext(AuthContext);

  console.log(currentUser)
*/
  return (
    <>
   
        <div>
          
       
           
        <RouterProvider router={router} /> 
           

            {/*
            
            {!currentUser?  <RouterProvider router={login} /> :
            currentUser.role==="admin"? <RouterProvider router={router} /> :  <RouterProvider router={routerUser} /> }
  */}
             
        </div>
  

     </>
  );}

