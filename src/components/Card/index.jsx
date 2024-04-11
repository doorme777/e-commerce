import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'

function Card(e) {
    const context = useContext(ShoppingCartContext);

    const ClassName = {
        container: 'bg-white cursor-pointer w-56 h-60',
        containerImage: 'relative mb-2 w-full h-4/5',
        categorie: 'absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-8.5',
        image: '"w-[100%] h-full object-cover rounded-lg',
        addCart: 'absolute top-0 right-0 flex justify-center items-center bg-white w-6 h6 rounded-full m-2',
        description: 'flex justify-between',
        price: 'text-lg font-medium',
        product: 'text-sm font-light'
    }
    const ResponseAPI = {
        "category": e.data?.category.name,
        "images": e.data?.images[0],
        "product": e.data?.title,
        "price": e.data?.price,
    }
    const showProduct = () => {
        context.openProductDetail();
        context.setProductDetail(e.data);
    }
    return(
        <article 
        className={ClassName.container}
        onClick={() => showProduct()}>
            <figure className={ClassName.containerImage}>
                <span className={ClassName.categorie}>{ResponseAPI.category}</span>
                <img className={ClassName.image} src={ResponseAPI.images} alt={ResponseAPI.product} />
                <div className={ClassName.addCart}
                onClick={() => context.setCount(context.count + 1)}>+</div>
            </figure>
            <p className={ClassName.description}>
                <span className={ClassName.product}>{ResponseAPI.product}</span>
                <span className={ClassName.price}>${ResponseAPI.price}</span>
            </p>
        </article>
    );
}

export default Card
