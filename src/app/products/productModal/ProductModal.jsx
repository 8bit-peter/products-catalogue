import React, { useContext } from 'react';
import styled from 'styled-components';
import IconClose from '../../../assets/svg/icon-close-x.svg';

import { ProductsContext } from '../../context/ContextProvider';

const StyledModalParent = styled.div`
  position: fixed;
  background-color: #1a1b1de6;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: ${({isOpen}) => isOpen ? "flex" : "none"};;
  justify-contet: center;
  align-items: center;
`

const StyledModal = styled.div`
  margin: auto;
  width: 600px;
  height: 530px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  position: relative;

  ${({ theme }) => theme.mq.xs} {
    margin-top: 120px;
    width: calc(100% - 48px);
  }
`

const StyledModalCloseIcon = styled.button`
  outline: 0;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 25px;
  right: 25px;
`

const StyledCloseIcon = styled.img`
  cursor: pointer;
`

const StyledModalImageBox = styled.div`
  height: 354px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  background-color: ${({theme}) => theme.color.gray_700};
`

const StyledModalImage = styled.img`
  max-width: 100%;
  display: block;

  ${({ theme }) => theme.mq.xs} {
    min-width: 100%;
  }

  ${({ theme }) => theme.mq.xxs} {
    min-width: initial;
    max-width: initial;
    height: 100%;
  }
`

const StyledModalContent = styled.div`
  padding: 24px 32px 56px 32px;
`

const StyledModalTitle = styled.h4`
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 8px;
`

const StyledModalDescription = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.gray_700};
`

const handleClose = (Context) => {
  Context.setProductData((prevState) => ({
    ...prevState,
    modalOpen: false,
  }))
}

export const ProductModal = () => {
  const Context = useContext(ProductsContext);

  return (
    <>
      <StyledModalParent isOpen={Context.productsData.modalOpen}>
          <StyledModal>
            <StyledModalCloseIcon onClick={() => handleClose(Context)}>
              <StyledCloseIcon src={IconClose} />
            </StyledModalCloseIcon>
            
            <StyledModalImageBox>
              <StyledModalImage src={Context.productsData.modalImg} />
            </StyledModalImageBox>

            <StyledModalContent>
              <StyledModalTitle>{Context.productsData.modalTitle}</StyledModalTitle>
              <StyledModalDescription>{Context.productsData.modalText}</StyledModalDescription>
            </StyledModalContent>


          </StyledModal>
      </StyledModalParent>
    </>
  );
};
  