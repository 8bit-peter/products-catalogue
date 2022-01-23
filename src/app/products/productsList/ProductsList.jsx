import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";

import IconEmptyList from '../../../assets/svg/icon-list-empty.svg';

import { Product } from '../product/Product';
import { GlobalContext } from '../../context/ContextProvider';
import { Loader } from '../loader/Loader';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 25%));
  grid-gap: 32px 24px;
  padding: 56px 108px;

  ${({ theme }) => theme.mq.s} {
    grid-template-columns: repeat(2, minmax(0, 50%));
  }

  ${({ theme }) => theme.mq.xs} {
    padding: 24px;
  }

  ${({ theme }) => theme.mq.xxs} {
    grid-template-columns: repeat(1, minmax(0, 100%));
  }
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
  background: ${({ theme }) => theme.color.white};
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
  color: ${({ theme }) => theme.color.gray_700};
`

export const ProductsList = () => {
  const Context = useContext(GlobalContext);
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const prepareQuery = () => {
    const {isActive, isPromo, searchQuery, activePage} = Context;

    const baseurl = "https://join-tsh-api-staging.herokuapp.com/products?limit=8"
    const searchParams = new URLSearchParams('')

    isActive && searchParams.set('active', isActive)
    isPromo && searchParams.set('promo', isPromo)
    activePage && searchParams.set('page', activePage)
    searchQuery !== '' && searchParams.set('search', searchQuery)
    return searchParams.toString() ? `${baseurl}&${searchParams.toString()}` : baseurl
  }
  
  useEffect(() => {
    fetch( prepareQuery() )
    .then(setIsLoading(true))
    .then(response => response.json())
    .then( data => {
      setIsLoading(false);
      setProductsList(data.items)
      Context.updatePageCount(data.meta.currentPage);
      Context.updatePageCount(data.meta.totalPages);
    })
  }, [Context.searchQuery, Context.isPromo, Context.isActive, Context.activePage])

  return (
    <>
      <StyledWrapper>

        {
          isLoading ?
          <Loader />
          :
          (productsList.length > 0 
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
            </StyledEmptyInfo>)
        }

      </StyledWrapper>
    </>
  );
};
