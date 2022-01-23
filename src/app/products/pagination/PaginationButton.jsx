import React, { useContext } from 'react';

import { GlobalContext } from '../../context/ContextProvider';

import styled from 'styled-components';

const StyledPaginationButton = styled.button`
padding: 0;
margin: 0;
outline: 0;
border: none;
cursor: pointer;
font-size: 14px;
line-height: 16px;
margin-right: ${({last}) => last ? "0px" : "16px"};

    &.active {
        color: ${({ theme }) => theme.color.blue_400};
    }
`

export const PaginationButton = ({ value, ellipsis, last }) => {
  const Context = useContext(GlobalContext);

  const setActivePage = (e) => {
    const pageButtonValue = parseInt(e.target.dataset.value);

    Context.setPage(pageButtonValue);
  }

    return (
      <>
        {ellipsis ? 
        <StyledPaginationButton>
          ...
        </StyledPaginationButton>
        :
        <StyledPaginationButton 
            onClick={(e) => setActivePage(e)} 
            data-value={value}
            className={(Context.activePage === value ? 'active' : '').toString()}
            last={last}
        >
            {value}
        </StyledPaginationButton>
        }
      </>
    );
  };