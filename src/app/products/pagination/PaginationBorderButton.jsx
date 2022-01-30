import React, { useContext } from 'react';

import { ProductsContext } from '../../context/ContextProvider';

import styled from 'styled-components';

const StyledPaginationBorderButton = styled.button`
  padding: 0;
  margin: 0;
  outline: 0;
  border: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  margin-right: ${({position}) => position === 'left' ? "32px" : "0"};
  margin-left: ${({position}) => position === 'left' ? "0px" : "32px"};

    &.disabled {
        color: ${({ theme }) => theme.color.gray_700};
    }
`

export const PaginationBorderButton = ({ value, text, position }) => {
  const Context = useContext(ProductsContext);

  const setActivePage = (e) => {
    const pageButtonValue = parseInt(e.target.dataset.value);

    Context.setProductData((prevState) => ({
      ...prevState,
      activePage: pageButtonValue
    }))
  }

    return (
      <>
        {<StyledPaginationBorderButton 
            onClick={(e) => setActivePage(e)} 
            data-value={value}
            className={ (Context.activePage === value ? 'disabled' : '').toString() }
            position={position}
        >
            {text}
        </StyledPaginationBorderButton>}
      </>
    );
  };