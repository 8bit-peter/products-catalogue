import React from 'react';
import styled from 'styled-components';

import StarFull from '../../../assets/svg/icon-star--full.svg';
import StarEmpty from '../../../assets/svg/icon-star--empty.svg';

const StyledStarBox = styled.div`
display: flex;
align-items: center;
margin-top: auto;
margin-bottom: 24px;
`

const StyledStarIcon = styled.img`
height: auto;
width: 12px;
margin-right: 11px;
`

const renderStars = (rating) => {
  let stars = [];

  for(let i = 1; i <= 5; i++) {
    if(i <= rating) {
      stars.push(<StyledStarIcon key={i} src={StarFull} />)
    } else {
      stars.push(<StyledStarIcon key={i} src={StarEmpty} />)
    }
  }

  return stars;
}

export const ProductStars = ({rating}) => {
  return (
    <>
        <StyledStarBox>
            {renderStars(rating)}
        </StyledStarBox>
    </>
  );
};
