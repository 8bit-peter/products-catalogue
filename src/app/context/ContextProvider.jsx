import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isPromo, toggleIsPromo] = useState(false);
  const [isActive, toggleIsActive] = useState(false);
  
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImage] = useState();
  const [modalTitle, setModalTitle] = useState();
  const [modalText, setModalText] = useState();

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

  const toggleModal = () => {
    setModalOpen((prev) => !prev)
  }

  const setModalImg = (value) => {
    setModalImage(value)
  }

  const setModalTtl = (value) => {
    setModalTitle(value)
  }

  const setModalTxt = (value) => {
    setModalText(value)
  }

  return (
    <>
      <GlobalContext.Provider 
        value={{ 
          searchQuery, updateSearch, 
          isPromo, togglePromo, 
          isActive, toggleActive, 
          activePage, setPage, 
          pageCount, updatePageCount, 
          modalOpen, toggleModal,
          modalImg, setModalImg,
          modalTitle, setModalTtl,
          modalText, setModalTxt
        }}>
          {children}
      </GlobalContext.Provider>
    </>
  );
};
  
export default ContextProvider;