import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index.jsx';
import { NavLink } from 'react-router-dom';


function SideMenu() {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'
    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setIsLogged(true)
    }

    return (
    <>
    <div className={`${context.openHamburger ? 'block' : 'hidden'}`}>
        <div 
        className='fixed left-0 top-0 z-50 flex h-screen flex-col justify-between w-full max-w-[320px] border-e bg-white lg:hidden'>
        <div className='px-4 py-6'>
            <span 
            className='font-semibold text-lg'
            >
            Shopi
            </span>

            <ul className='mt-6 space-y-1'>

            <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                <summary
                    className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                >
                    <span className='text-sm font-medium'> Category </span>

                    <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                        />
                    </svg>
                    </span>
                </summary>

                <ul className='mt-2 space-y-1 px-4'>
                    <li 
                    onClick={() => context.setOpenHamburger(!context.openHamburger)}>
                    <NavLink
                    to='/e-commerce/clothes'
                    className={`${({ isActive }) =>
                isActive ? activeStyle : undefined} block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                onClick={() => context.setSearchByCategory('clothes')}
                >
                        Clothes
                </NavLink>
                    </li>

                    <li 
                    onClick={() => context.setOpenHamburger(!context.openHamburger)}>
                    <NavLink
                    to='/e-commerce/electronics'
                    className={`${({ isActive }) =>
                isActive ? activeStyle : undefined} block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                onClick={() => context.setSearchByCategory('electronics')}
                >
                        Electronics
                </NavLink>
                    </li>

                    <li 
                    onClick={() => context.setOpenHamburger(!context.openHamburger)}>
                    <NavLink
                    to='/e-commerce/forntures'
                    className={`${({ isActive }) =>
                isActive ? activeStyle : undefined} block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                onClick={() => context.setSearchByCategory('forntures')}
                >
                        Fornitues
                </NavLink>
                    </li>

                    <li 
                    onClick={() => context.setOpenHamburger(!context.openHamburger)}>
                    <NavLink
                    to='/e-commerce/toys'
                    className={`${({ isActive }) =>
                isActive ? activeStyle : undefined} block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                onClick={() => context.setSearchByCategory('toys')}
                >
                        Toys
                </NavLink>
                    </li>

                    <li 
                    onClick={() => context.setOpenHamburger(!context.openHamburger)}>
                    <NavLink
                    to='/e-commerce/others'
                    className={`${({ isActive }) =>
                isActive ? activeStyle : undefined} block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                onClick={() => context.setSearchByCategory('others')}
                >
                        Others
                </NavLink>
                    </li>
                </ul>
                </details>
            </li>

            <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                <summary
                    className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                >
                    <span className='text-sm font-medium'> Account </span>

                    <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                        />
                    </svg>
                    </span>
                </summary>

                <ul className='mt-2 space-y-1 px-4'>
                    <li 
                    onClick={() => context.setOpenHamburger(!context.openHamburger)}>
                    <NavLink to='/e-commerce/my-account' className={`${({ isActive }) =>
                isActive ? activeStyle : undefined} block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}>
                        Details
                        </NavLink>
                    </li>

                    <li 
                    onClick={() => context.setOpenHamburger(!context.openHamburger)}>
                    <NavLink to='/e-commerce/my-orders' className={`${({ isActive }) =>
                isActive ? activeStyle : undefined} block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}>
                        My orders
                        </NavLink>
                    </li>
                </ul>
                </details>
                <li
                    onClick={() => {
                        context.setOpenHamburger(!context.openHamburger)
                        handleSignOut()
                    }}
                    >
                        <NavLink to='/e-commerce/sign-in' className={`${({ isActive }) =>
                isActive ? activeStyle : undefined} block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}>
                        {localStorage.getItem('sign-out') ? 'Log in' : 'Log out'}
                        </NavLink>
                    </li>
            </li>
            </ul>
        </div>

        <div className='sticky inset-x-0 bottom-0 border-t border-gray-100'>
            <a href='#' className='flex items-center gap-2 bg-white p-4 hover:bg-gray-50'>

            <div>
                <p className='text-xs'>
                <strong className='block font-medium'>{context.user.name}</strong>

                <span> {context.user.email} </span>
                </p>
            </div>
            </a>
        </div>
        </div>
    </div>
    </>
    )
}

export { SideMenu };