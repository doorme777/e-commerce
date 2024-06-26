import React from "react"; // Add this line
import { BrowserRouter, useRoutes } from "react-router-dom";
import {ShoppingCartProvider} from "../../Context/index.jsx"
// enpoints
import { Home } from "../Home/index.jsx";
import MyAccount from "../MyAccount/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import NotFound from "../NotFound/index.jsx";
import SignIn from "../SignIn/index.jsx";
// components
import Navbar from '../../components/NavBar/index.jsx';
import CheckoutSideMenu from '../../components/CheckoutSideMenu/index.jsx';
import "./App.css";

function AppRoutes() {
  let routes = useRoutes([
    {path: '/', element:<Home/>},
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/fornitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    {path: '/my-account', element:<MyAccount/>},
    {path: '/my-order', element:<MyOrder/>},
    {path: '/my-orders/last/', element:<MyOrder/>},
    {path: '/my-orders/:id', element:<MyOrder/>},
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
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;