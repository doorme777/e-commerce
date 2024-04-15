import { useContext } from 'react'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function Card(e) {
    const context = useContext(ShoppingCartContext);

    const ClassName = {
        container: 'bg-white cursor-pointer w-[224px] h-60',
        containerImage: 'relative mb-2 w-full h-4/5',
        categorie: 'absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-8.5',
        image: 'size-full object-cover rounded-lg',
        addCart: 'absolute top-0 right-0 flex justify-center items-center bg-white size-6 rounded-full m-2',
        addedCart: 'absolute top-0 right-0 flex justify-center items-center bg-black size-6 rounded-full m-2 p-1',
        description: 'flex justify-between items-center',
        price: 'text-lg font-medium',
        product: 'text-sm font-light',
    }
    const ResponseAPI = {
        "category": e.data?.category.name,
        "images": e.data?.images[0],
        "product": e.data?.title,
        "price": e.data?.price,
    }
    const showProduct = (x) => {
        context.openProductDetail();
        context.setProductToShow(x);
    }
    const addProduct = (event,productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        console.log('CART: ', context.cartProducts)
    }
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
          return (
            <div
              className={ClassName.addedCart}>
              <CheckIcon className='size-6 text-white'></CheckIcon>
            </div>
          )
        } else {
          return (
            <div
              className={ClassName.addCart}
              onClick={(event) => addProduct(event, e.data)}>
              <PlusIcon className='size-6 text-black'></PlusIcon>
            </div>
          )
        }
    }
    return(
        <article 
        className={ClassName.container}
        onClick={() => showProduct(e.data)}>
            <figure className={ClassName.containerImage}>
                <span className={ClassName.categorie}>{ResponseAPI.category}</span>
                <img className={ClassName.image} src={ResponseAPI.images} alt={ResponseAPI.product} />
                {renderIcon(e.data.id)}
            </figure>
            <p className={ClassName.description}>
                <span className={ClassName.product}>{ResponseAPI.product}</span>
                <span className={ClassName.price}>${ResponseAPI.price}</span>
            </p>
        </article>
    );
}

export default Card
