import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    // Product Detail · Open & Close
    const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false);
    const openProductDetail = () => SetIsProductDetailOpen(true);
    const closeProductDetail = () => SetIsProductDetailOpen(false);

    // Checkout sid menu · Open & Close
    const [isCheckoutSideMenuOpen, SetIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(false);

    // Cart · Add product
    const [cartProducts, setCartProducts] = useState([]);
    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})
    // Shopping Cart · Order
    const [order, setOrder] = useState([])

    // Fetch data products.
    const [items, setItem] = useState(null); 
    const [filteredItem, setFilteredItem] = useState(null);
     
    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => { 
      const fetchData = async () => { 
        const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
          headers: {
            "Content-Type": "application/json",
          }
        })
        const data = await response.json();
        setItem(data); 
      }
      fetchData(); 
    },[])

    const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
      if (searchByTitle) {
        setFilteredItem(filteredItemsByTitle(items,searchByTitle))
      }
    },[items,searchByTitle])

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
        items,
        setItem,
        searchByTitle,
        setSearchByTitle,
        filteredItem,
        setFilteredItem,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}