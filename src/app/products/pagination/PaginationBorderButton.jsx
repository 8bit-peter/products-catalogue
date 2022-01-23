import React, { useContext } from 'react';

import { GlobalContext } from '../../context/ContextProvider';

import styled from 'styled-components';

const StyledPaginationBorderButton = styled.button`
padding: 0;
margin: 0;
outline: 0;
border: none;
cursor: pointer;
font-size: 14px;
line-height: 16px;
margin-right: ${props => props.position === 'left' ? "32px" : "0"};
margin-left: ${props => props.position === 'left' ? "0px" : "32px"};

    &.disabled {
        color: #9194A5;
    }
`

export const PaginationBorderButton = ({ value, text, position }) => {
  const Context = useContext(GlobalContext);

  const setActivePage = (e) => {
    const pageButtonValue = parseInt(e.target.dataset.value);

    Context.setPage(pageButtonValue);
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