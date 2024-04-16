import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

import './index.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const ClassName = {
    'container': `${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`,
    'containerProducts': 'flex justify-between items-center p-6',
    'title': 'font-medium text-xl',
    'iconClose': 'size-6 text-black'
  }

  return (
    <aside 
    className={ClassName.container}
    >
      <div className={ClassName.containerProducts}>
        <h2 className={ClassName.title}>Detail</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XMarkIcon className='size-6 text-black'></XMarkIcon>
        </div>
      </div>
      <figure className='px-6'>
  <img className='size-full object-cover rounded-lg'
  src={context.productToShow.images?.[0]} 
  alt={context.productToShow.title} 
/>

      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail;