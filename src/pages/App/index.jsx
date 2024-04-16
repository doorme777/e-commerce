import React from "react"; // Add this line
import { Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/index.jsx";
import { BrowserRouter, useRoutes } from "react-router-dom";
import {ShoppingCartProvider} from "../../Context/index.jsx"
// enpoints
import {Home} from "../Home/index.jsx";
import MyAccount from "../MyAccount/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import NotFound from "../NotFound/index.jsx";
import SignIn from "../SignIn/index.jsx";
// components
import Navbar from '../../components/NavBar/index.jsx';
import CheckoutSideMenu from '../../components/CheckoutSideMenu/index.jsx';
import "./App.css";
import { SideMenu } from "../../components/SideMenu/index.jsx";

function AppRoutes() {
  const context = React.useContext(ShoppingCartContext)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.count).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/fornitures', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
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
        <SideMenu/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;