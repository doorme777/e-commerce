import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

import './index.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const ClassName = {
    "container": `${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`,
    "containerProducts": 'flex justify-between items-center p-6',
    "title": 'font-medium text-xl',
    "iconClose": 'size-6 text-black'
  }

  return (
    <aside 
    className={ClassName.container}
    >
      <div className={ClassName.containerProducts}>
        <h2 className={ClassName.title}>My order.</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon 
          className='size-6 text-black'></XMarkIcon>
        </div>
      </div>
      
    </aside>
  )
}

export default CheckoutSideMenu;