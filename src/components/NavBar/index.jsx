import { NavLink } from "react-router-dom";
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import {HamburgerMenu} from '../HamburgerMenu/index.jsx'
import { render } from "react-dom";


function Navbar() {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'
    const navClasses = {
        Navbar: 'flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white',
        ulClasses: 'flex items-center gap-3',
        logo: 'font-semibold text-lg',
    }

    const RenderOthersSection = () => {
        if(context.isLogged){
          return (
            <>
      <li className='text-black/60 hidden lg:block' >
                    {context.user.email}
                </li>
                <li className='hidden lg:block'>
                    <NavLink to="/my-orders" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    My orders
                    </NavLink>
                </li>
                <li className='hidden lg:block'>
                <NavLink to="/my-account" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    My account
                    </NavLink>
                </li>
                
            </>
          )
        }
    }

    const handleSignOut = () => {
      const stringifiedSignOut = JSON.stringify(true)
      localStorage.setItem('sign-out', stringifiedSignOut)
      context.setIsLogged(true)
    }
    
    return(
        <nav className={navClasses.Navbar}>
            <ul className={navClasses.ulClasses}>
              <li 
              className="lg:hidden"
              onClick={() => context.setOpenHamburger(!context.openHamburger)}>
                <HamburgerMenu />
              </li>
            <li className={navClasses.logo}>
              <NavLink
              to='/'
              className={({ isActive }) =>isActive ? activeStyle : undefined}
              onClick={() => context.setSearchByCategory()}>  
                Shopi
              </NavLink>
                </li>
                <li className='hidden lg:block'>
   
              <NavLink to='/clothes'
                className={({ isActive }) =>
              isActive ? activeStyle : undefined}
              onClick={() => context.setSearchByCategory("clothes")}
            >
                    Clothes
                </NavLink>
                </li>
                <li className='hidden lg:block'>
                <NavLink
                to='/electronics'
                className={({ isActive }) =>
              isActive ? activeStyle : undefined} 
              onClick={() => context.setSearchByCategory("electronics")}
              >
                    Electronics
                </NavLink>
                </li>
                <li className='hidden lg:block'>
                <NavLink
                to='/fornitures'
                className={({ isActive }) =>
              isActive ? activeStyle : undefined}
              onClick={() => context.setSearchByCategory("fornitures")}
              >
                    Fornitures
                </NavLink>
                </li>
                <li className='hidden lg:block'>
                <NavLink
                to='/toys'
                className={({ isActive }) =>
              isActive ? activeStyle : undefined}
              onClick={() => context.setSearchByCategory("toys")}
              >
                    Toys
                </NavLink>
                </li>
                <li className='hidden lg:block'>
                <NavLink
                to='/others'
                className={({ isActive }) =>
              isActive ? activeStyle : undefined}
              onClick={() => context.setSearchByCategory("others")}
              >
                    Others
                </NavLink>
                </li>
            </ul>
            <ul className={navClasses.ulClasses}>
              {RenderOthersSection()}
                <li
                className='hidden lg:block'
              onClick={() => handleSignOut()}
              >
                <NavLink to="/sign-in" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    {localStorage.getItem('sign-out') ? 'Log in' : 'Log out'}
                    </NavLink>
                </li>
                <li className="flex items-center gap-1">
                    <ShoppingCartIcon className='size-6 text-black'></ShoppingCartIcon>
                    <div>
                      {context.cartProducts.length}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;