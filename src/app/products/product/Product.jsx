import React from 'react';
import styled from "styled-components";
import { ProductStars } from './ProductStars';

const StyledProduct = styled.div`
width: 100%;
max-width: 100%;
background-color: #fff;
border-radius: 8px;
height: 400px;
display: flex;
flex-direction: column;
`

const StyledImageBox = styled.div`
max-height: 170px;
overflow:hidden;
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-radius: 8px 8px 0 0;

  img {
    max-width: 100%;
    display: block;

    &.disabled {
      filter: grayscale(100%);
    }
  }
`

const StyledPromoLabel = styled.span`
position: absolute;
top: 16px;
left: 0;
padding: 4px 16px;
background-color: #F9A52B;
color: #fff;
font-size: 14px;
line-height: 16px;
z-index: 1;
`

const StyledProductContent = styled.div`
padding: 16px 16px 24px 16px;
flex-grow: 1;
display: flex;
flex-direction: column;
`

const StyledProductTitle = styled.h3`
font-size: 18px;
line-height: 16px;
margin-bottom: 8px;
`

const StyledProductDescription = styled.p`
font-size: 14px;
line-height: 16px;
color: #9194A5;
`

const StyledProductButton = styled.button`
background-color: #4460F7;
border-radius: 4px;
outline: 0;
color: #fff;
padding: 11px 0;
box-shadow: none;
border: none;
cursor: pointer;
  &:disabled {
    background-color: #9194A5;
    cursor: default;
  }
`

export const Product = ({product}) => {
  const {promo, image, name, description, rating, active} = product;

  return (
    <>
        <StyledProduct>
          <StyledImageBox>
            {promo && <StyledPromoLabel>Promo</StyledPromoLabel>}

            <img className={ (!active && 'disabled').toString() } src={image} alt={name} />
          </StyledImageBox>

          <StyledProductContent>
            <StyledProductTitle>{name}</StyledProductTitle>
            <StyledProductDescription>{description}</StyledProductDescription>

            <ProductStars rating={rating} />

            <StyledProductButton disabled={!active}>
                {active ? 'Show details' : 'Unavaiable'}
            </StyledProductButton>
          </StyledProductContent>

        </StyledProduct>
    </>
  );
};
