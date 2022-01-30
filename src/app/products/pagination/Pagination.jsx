import React, { useContext } from 'react';
import styled from 'styled-components';

import { PaginationButton } from './PaginationButton';
import { PaginationBorderButton } from './PaginationBorderButton';

import { ProductsContext } from '../../context/ContextProvider';

const StyledPagination = styled.div`
display: flex;
justify-content: center;
margin-bottom: 56px;
`

export const Pagination = () => {
  const Context = useContext(ProductsContext);
  const {activePage, pageCount} = Context.productsData;

  //function to render first 3 buttons if total page count > 6
  const renderFirstThree = (page) => {
    let firstButtons = [];

    firstButtons.push(<PaginationBorderButton key={0} value={1} text={'First'} position={'left'}  />)

    //case if position of active page is 1
    if (page === 1) {
      for(let i = page; i <= 3; i++) {
        firstButtons.push(<PaginationButton key={i+1} value={i} />)
      }
      firstButtons.push(<PaginationButton key='999' ellipsis />);

    //case if position of active page is 2
    } else if (page === 2) {
      for(let i = page -1 ; i <= 3; i++) {
        firstButtons.push(<PaginationButton key={i+1} value={i} />)
      }
      firstButtons.push(<PaginationButton key='999' ellipsis />);

    //case if position of active page is >= 3 but lesser than total page count -4 to apply ellipsis
    } else if (page >= 3 && page <= pageCount - 4) {
      for(let i = page -1 ; i <= page + 1 ; i++) {
        firstButtons.push(<PaginationButton key={i+1} value={i} />)
      }
      firstButtons.push(<PaginationButton key='999' ellipsis />);
    } 

    //case if position of active page is close to last numbers of total page count to miss ellipsis element
    else if (page >= 3 && page > pageCount - 4) {
      for(let i = (pageCount - 4) -1 ; i <= (pageCount - 4) + 1 ; i++) {
        firstButtons.push(<PaginationButton key={i+1} value={i} />)
      }
    }

    return firstButtons
  }

  //function to render last 3 buttons if total page count > 6
  const renderLastThree = (pageCount) => {
    let lastButtons = [];
    
    for(let i = pageCount - 2 ; i <= pageCount; i++) {
      if(i === pageCount) {
        lastButtons.push(<PaginationButton key={i} value={i} last />)
      } else {
        lastButtons.push(<PaginationButton key={i} value={i} />)
      }
      
    }

    lastButtons.push(<PaginationBorderButton key={0} value={pageCount} text={'Last'} position={'right'}  />)

    return lastButtons
  }

  const renderButtons = (pageCount) => {
    let buttons = [];

    if (pageCount <= 6) {
      for(let i = 1; i <= pageCount; i++) {
        if(i <= pageCount) {
          //making sure that last button doen't have right margin
          i === pageCount ? buttons.push(<PaginationButton key={i} value={i} last />) : buttons.push(<PaginationButton key={i} value={i} />)
        } 
      }

    } else if(pageCount > 6) {
      buttons.push(renderFirstThree(activePage));
      buttons.push(renderLastThree(pageCount))
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