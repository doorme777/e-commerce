import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const initialLocalStorage = () => {
  const accounInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out') 
  let parsedAccount;
  let parsedSignOut;

  if(!accounInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accounInLocalStorage)
  }

  if(!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage);
  }
}

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    
    // Login & Logout
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({});

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
    const [filteredItem, setFilteredItems] = useState(null);
     
    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [searchByCategory, setSearchByCategory] = useState(null);

    // Form for new and older users.
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      setUser(data);
      setIsLogged(true);
      localStorage.setItem('account', JSON.stringify(data)); // Store data in localStorage with the identifier 'account'
    };

    useEffect(() => {
      initialLocalStorage();
    }, []);

    const initialLocalStorage = () => {
      const accountInLocalStorage = localStorage.getItem('account');
      if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}));
      }
    };
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

    const filteredItemsByCategory = (items, searchByCategory) => {
      return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
      if (searchType === 'BY_TITLE') {
        return filteredItemsByTitle(items, searchByTitle)
      }
  
      if (searchType === 'BY_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory)
      }
  
      if (searchType === 'BY_TITLE_AND_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
  
      if (!searchType) {
        return items
      }
    }

    useEffect(() => {
      if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
      if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
      if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
      if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

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
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
        isLogged,
        setIsLogged,
        user,
        setUser,
        handleSubmit,
        initialLocalStorage,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}