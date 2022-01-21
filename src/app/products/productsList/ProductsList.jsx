import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";

import { Product } from '../product/Product';
import { GlobalContext } from '../../context/ContextProvider';

const StyledWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 25%);
grid-gap: 32px 24px;
padding: 56px 108px;
background: #F2F2F2;
`;

export const ProductsList = () => {
  const Context = useContext(GlobalContext);
  const [productsList, setProductsList] = useState([]);

  const prepareQuery = () => {
    const baseurl = "https://join-tsh-api-staging.herokuapp.com/products?limit=8"
    const searchParams = new URLSearchParams('')

    Context.isActive && searchParams.set('active', Context.isActive)
    Context.isPromo && searchParams.set('promo', Context.isPromo)
    Context.searchQuery !== '' && searchParams.set('search', Context.searchQuery)
    return searchParams.toString() ? `${baseurl}&${searchParams.toString()}` : baseurl
  }
  
  useEffect(() => {
    fetch( prepareQuery() )
    .then(response => response.json())
    .then( data => {
      setProductsList(data.items)
      //console.log(data);
    })
  }, [Context.searchQuery, Context.isPromo, Context.isActive])

  return (
    <>
      <StyledWrapper>
        {
          productsList.map( product => (
              <Product
                id={product.id}
                key={product.id}
                product={product}
              />
          ))
        }
      </StyledWrapper>
    </>
  );
};
