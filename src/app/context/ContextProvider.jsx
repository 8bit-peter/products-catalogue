import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

const ContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState({
    searchQuery: '',
    isPromo: false,
    isActive: false,
    activePage: 1,
    pageCount: null,
    modalOpen: false,
    modalImg: null,
    modalTitle: null,
    modalText: null,
  })

  const setProductData = (value) => {
    setProductsData(value)
  }

  return (
    <>
      <ProductsContext.Provider 
        value={{ productsData, setProductData }}>
          {children}
      </ProductsContext.Provider>
    </>
  );
};
  
export default ContextProvider;