import React from "react"; // Add this line
import { BrowserRouter, useRoutes } from "react-router-dom";
import ShoppingCartProvider from "../../components/Context/index.jsx"
// enpoints
import { Home } from "../Home/index.jsx";
import MyAccount from "../MyAccount/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import NotFound from "../NotFound/index.jsx";
import SignIn from "../SignIn/index.jsx";
// components
import Navbar from '../../components/NavBar/index.jsx';
import "./App.css";

function AppRoutes() {
  let routes = useRoutes([
    {path: '/', element:<Home/>},
    {path: '/my-account', element:<MyAccount/>},
    {path: '/my-order', element:<MyOrder/>},
    {path: '/my-orders', element:<MyOrders/>},
    {path: '/sign-in', element:<SignIn/>},    
    {path: '/*', element:<NotFound/>},
  ])

  return routes;
}

function App() {
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;