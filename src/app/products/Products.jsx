import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppRoute } from '../../routing/AppRoute.enum';
import ContextProvider from '../context/ContextProvider';

import { Header } from './header/Header';
import { ProductsList } from './productsList/ProductsList';
import { Pagination } from './pagination/Pagination';

export const Products = () => {

  return (
    <>
      <ContextProvider>
        <Header />

        <ProductsList />

        <Pagination />

      </ContextProvider>
    </>
  );
};
