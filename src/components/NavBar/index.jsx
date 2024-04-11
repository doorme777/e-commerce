import { NavLink } from "react-router-dom";

function Navbar() {
    const activeStyle = 'underline underline-offset-4'
    const navClasses = {
        Navbar: 'flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light',
        ulClasses: 'flex items-center gap-3',
        logo: 'font-semibold text-lg',
    }
    
    return(
        <nav className={navClasses.Navbar}>
            <ul className={navClasses.ulClasses}>
            <li className={navClasses.logo}>
                    Shopi
                </li>
                <li>
                <NavLink to="/clothes" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    Clothes
                </NavLink>
                </li>
                <li>
                <NavLink to="/electronics" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    Electronics
                </NavLink>
                </li>
                <li>
                <NavLink to="/fornitures" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    Fornitures
                </NavLink>
                </li>
                <li>
                <NavLink to="/toys" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    Toys
                </NavLink>
                </li>
                <li>
                <NavLink to="/others" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    Others
                </NavLink>
                </li>
            </ul>
            <ul className={navClasses.ulClasses}>
                <li className='text-black/60'>
                    correo@platzi.com
                </li>
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    My orders
                    </NavLink>
                </li>
                <li>
                <NavLink to="/my-account" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    My account
                    </NavLink>
                </li>
                <li>
                <NavLink to="/sign-in" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    Sing In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;