import React, { useContext } from 'react';
import styled from 'styled-components';

import { PaginationButton } from './PaginationButton';

import { GlobalContext } from '../../context/ContextProvider';

const StyledPagination = styled.div`
display: flex;
justify-content: center;
`

export const Pagination = () => {
  const Context = useContext(GlobalContext);
  const {activePage, pageCount} = Context;

  const renderFirstThree = (page) => {
    let firstButtons = []
    if (page < 2) {
      for(let i = page; i <= 3; i++) {
        firstButtons.push(<PaginationButton key={i} value={i} />)
      }
    } else if (page > 1 && page < 3) {
      for(let i = page -1 ; i <= 3; i++) {
        firstButtons.push(<PaginationButton key={i} value={i} />)
      }
    } else if (page >= 3) {
      console.log(page);
      for(let i = page -1 ; i <= page + 1; i++) {
        firstButtons.push(<PaginationButton key={i} value={i} />)
      }
      firstButtons.push('...');
    }

    return firstButtons
  }

  const renderButtons = (pageCount) => {
    let buttons = [];

    if (pageCount <= 6) {
      for(let i = 1; i <= pageCount; i++) {
        if(i <= pageCount) {
          buttons.push(<PaginationButton key={i} value={i} />)
        } 
      }

    } else if(pageCount > 6) {
      buttons.push(renderFirstThree(activePage));
    }

    return buttons;
  }

  return (
    <>
      <StyledPagination>
        {renderButtons(pageCount)}
      </StyledPagination>
    </>
  );
};