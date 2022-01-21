import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isPromo, toggleIsPromo] = useState(false);
  const [isActive, toggleIsActive] = useState(false);

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

  return (
    <>
      <GlobalContext.Provider value={{ searchQuery, updateSearch, isPromo, togglePromo, isActive, toggleActive }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};
  
export default ContextProvider;