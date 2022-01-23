import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppRoute } from '../../routing/AppRoute.enum';
import ContextProvider from '../context/ContextProvider';

import styled from 'styled-components';
import theme from '../../styles/theme'

import { Header } from './header/Header';
import { ProductsList } from './productsList/ProductsList';
import { Pagination } from './pagination/Pagination';
import { ProductModal } from './productModal/ProductModal';

const StyledProductsParent = styled.div`
  position: relative;
`

export const Products = () => {

  return (
    <>
      <ContextProvider>
        <StyledProductsParent theme={theme}>
          <Header />

          <ProductsList />

          <Pagination />

          <ProductModal />
        </StyledProductsParent>
      </ContextProvider>
    </>
  );
};
