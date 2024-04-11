import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false);
    const openProductDetail = () => SetIsProductDetailOpen(true);
    const closeProductDetail = () => SetIsProductDetailOpen(false);

    // Cart · Add product
    const [cartProducts, setCartProducts] = useState([]);
    // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({})
    return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}