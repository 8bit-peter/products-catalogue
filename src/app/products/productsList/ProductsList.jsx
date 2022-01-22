import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";

import IconEmptyList from '../../../assets/svg/icon-list-empty.svg';

import { Product } from '../product/Product';
import { GlobalContext } from '../../context/ContextProvider';

const StyledWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 25%));
grid-gap: 32px 24px;
padding: 56px 108px;
`;

const StyledEmptyInfo = styled.div`
  width: 100%;
  grid-column: 1/ span 4;
  height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledEmptyContent = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 120px 0;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    img {
      margin-bottom: 22px;
    }
`

const StyledTopInfo = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  margin-bottom: 8px;
`

const StyledBottomInfo = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #9194A5;
`

export const ProductsList = () => {
  const Context = useContext(GlobalContext);
  const [productsList, setProductsList] = useState([]);

  const prepareQuery = () => {
    const {isActive, isPromo, searchQuery, activePage} = Context;

    const baseurl = "https://join-tsh-api-staging.herokuapp.com/products?limit=2"
    const searchParams = new URLSearchParams('')

    isActive && searchParams.set('active', isActive)
    isPromo && searchParams.set('promo', isPromo)
    activePage && searchParams.set('page', activePage)
    searchQuery !== '' && searchParams.set('search', searchQuery)
    return searchParams.toString() ? `${baseurl}&${searchParams.toString()}` : baseurl
  }
  
  useEffect(() => {
    fetch( prepareQuery() )
    .then(response => response.json())
    .then( data => {
      setProductsList(data.items)
      Context.updatePageCount(data.meta.currentPage);
      Context.updatePageCount(data.meta.totalPages);
    })
  }, [Context.searchQuery, Context.isPromo, Context.isActive, Context.activePage])

  return (
    <>
      <StyledWrapper>

        {
          productsList.length > 0 
          ? productsList.map( product => (
              <Product
                id={product.id}
                key={product.id}
                product={product}
              />
          ))
          : <StyledEmptyInfo>
              <StyledEmptyContent>
                <img src={IconEmptyList} alt="Empty list" />
                <StyledTopInfo>Ooops… It’s empty here</StyledTopInfo>
                <StyledBottomInfo>There are no products on the list</StyledBottomInfo>
              </StyledEmptyContent>
            </StyledEmptyInfo>
        }

      </StyledWrapper>
    </>
  );
};
