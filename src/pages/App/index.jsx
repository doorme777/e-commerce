import React from 'react'; // Add this line
import { Navigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context/index.jsx';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import {ShoppingCartProvider} from '../../Context/index.jsx'
// enpoints
import {Home} from '../Home/index.jsx';
import MyAccount from '../MyAccount/index.jsx';
import MyOrder from '../MyOrder/index.jsx';
import MyOrders from '../MyOrders/index.jsx';
import NotFound from '../NotFound/index.jsx';
import SignIn from '../SignIn/index.jsx';
// components
import Navbar from '../../components/NavBar/index.jsx';
import CheckoutSideMenu from '../../components/CheckoutSideMenu/index.jsx';
import './App.css';
import { SideMenu } from '../../components/SideMenu/index.jsx';

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
    { path: '/e-commerce/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/e-commerce/sign-in'} /> },
    { path: '/e-commerce/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/e-commerce/sign-in'} /> },
    { path: '/e-commerce/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/e-commerce/sign-in'} /> },
    { path: '/e-commerce/fornitures', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/e-commerce/sign-in'} /> },
    { path: '/e-commerce/toys', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/e-commerce/sign-in'} /> },
    { path: '/e-commerce/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/e-commerce/sign-in'} /> },
    {path: '/e-commerce/', element:<Home/>},
    { path: '/e-commerce/clothes', element: <Home /> },
    { path: '/e-commerce/electronics', element: <Home /> },
    { path: '/e-commerce/fornitures', element: <Home /> },
    { path: '/e-commerce/toys', element: <Home /> },
    { path: '/e-commerce/others', element: <Home /> },
    {path: '/e-commerce/my-account', element:<MyAccount/>},
    {path: '/e-commerce/my-order', element:<MyOrder/>},
    {path: '/e-commerce/my-orders/last/', element:<MyOrder/>},
    {path: '/e-commerce/my-orders/:id', element:<MyOrder/>},
    {path: '/e-commerce/my-orders', element:<MyOrders/>},
    {path: '/e-commerce/sign-in', element:<SignIn/>},  
    {path: '/e-commerce/*', element:<NotFound/>},
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