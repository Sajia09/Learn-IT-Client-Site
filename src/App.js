import logo from './logo.svg';
import React, { useContext } from "react";
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from './Contexts/ThemeProvider/Theme';
import { Toaster } from 'react-hot-toast';
import ReactDOM from "react-dom";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div  className={`${theme}`}>
       <RouterProvider router={routes}></RouterProvider>
       <Toaster></Toaster>
    </div>
  );
}

export default App;
