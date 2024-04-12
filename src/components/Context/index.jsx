import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    // Product Detail · Open & Close
    const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false);
    const openProductDetail = () => SetIsProductDetailOpen(true);
    const closeProductDetail = () => SetIsProductDetailOpen(false);

    // Checkout sid menu · Open & Close
    const [isCheckoutSideMenuOpen, SetIsCheckoutSideMenuOpen] = useState(true);
    const openCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(false);

    // Cart · Add product
    const [cartProducts, setCartProducts] = useState([]);
    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})
    // Shopping Cart · Order
    const [order, setOrder] = useState([])
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
        setCartProducts,
        isCheckoutSideMenuOpen,
        SetIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}