import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isPromo, toggleIsPromo] = useState(false);
  const [isActive, toggleIsActive] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState();

  const updateSearch = (value) => {
    if (value !== '') {
      setSearchQuery(value);
    } else {
      setSearchQuery('');
    }
  };

  const togglePromo = () => {
    toggleIsPromo((prev) => !prev);
  }

  const toggleActive = () => {
    toggleIsActive((prev) => !prev);
  }

  const setPage = (value) => {
    setActivePage(value);
  }

  const updatePageCount = (value) => {
    setPageCount(value)
  }

  return (
    <>
      <GlobalContext.Provider value={{ searchQuery, updateSearch, isPromo, togglePromo, isActive, toggleActive, activePage, setPage, pageCount, updatePageCount }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};
  
export default ContextProvider;