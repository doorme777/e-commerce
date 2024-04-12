import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../utils'
import OrderCard from '../OrderCard'

import './index.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const ClassName = {
    "container": `${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`,
    "containerProducts": 'flex justify-between items-center p-6',
    "title": 'font-medium text-xl',
    "iconClose": 'size-6 text-black'
  }
  const handleDeleteProducts = (id) =>  {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(filteredProducts);
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
      <div className="overflow-y-scroll">
      {
        context.cartProducts.map((product) => (
            <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
            handleDeleteProducts={handleDeleteProducts} 
            />
        ))
      }
      </div>
      <div className='px-6'> 
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu;