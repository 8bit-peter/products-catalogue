import React, { useContext } from 'react';
import styled from "styled-components";
import { ProductStars } from './ProductStars';

import { ProductsContext } from '../../context/ContextProvider';

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
  height: 170px;
  overflow:hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 8px 8px 0 0;
  background-color: ${({theme}) => theme.color.gray_700};

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
  color: ${({ theme }) => theme.color.white};
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
  color: ${({ theme }) => theme.color.gray_700};
`

const StyledProductButton = styled.button`
  background-color: ${({ theme }) => theme.color.blue_400};
  border-radius: 4px;
  outline: 0;
  color: ${({ theme }) => theme.color.white};
  padding: 11px 0;
  box-shadow: none;
  border: none;
  cursor: pointer;
  transition: background-color .3s;

    &:hover {
      background-color: ${({ theme }) => theme.color.blue_700};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.gray_700};
      cursor: default;
    }
`

export const Product = ({product}) => {
  const Context = useContext(ProductsContext);
  const {promo, image, name, description, rating, active} = product;

  const handleModal = (e) => {
    const targetImage = e.target.dataset.img;
    const targetTitle = e.target.dataset.title;
    const targetDescription = e.target.dataset.description;

    Context.setProductData((prevState) => ({
      ...prevState,
      modalImg: targetImage,
      modalTitle: targetTitle,
      modalText: targetDescription,
      modalOpen: true,
    }))
  }

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

            <StyledProductButton 
              disabled={!active} 
              data-img={image} 
              data-title={name}
              data-description={description}
              onClick={(e) => handleModal(e)}
            >
                {active ? 'Show details' : 'Unavaiable'}
            </StyledProductButton>
          </StyledProductContent>

        </StyledProduct>
    </>
  );
};
