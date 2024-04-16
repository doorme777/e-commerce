import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
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

  const handleCheckout = () => {
    const orderToAdd = {
      date: Date.now(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setSearchByTitle(event.target.value);
  }

  // context.serOrder([...context.order, orderToAdd]);
  // context.setCartProducts([]);  
  

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
      <div className="overflow-y-scroll flex-1">
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
      <div className='px-6 mb-6'> 
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to="/e-commerce/my-orders/last">
          <button 
          className="bg-black py-3 text-white w-full rounded-lg" 
          onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu;