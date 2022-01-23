import React from "react";
import styled from "styled-components";

import IconLoader from '../../../assets/svg/icon-loader.svg';

const StyledLoader = styled.div`
  width: 100%;
  grid-column: 1/ span 4;
  height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLoaderIcon = styled.img`
    max-width: 100%;
    display: block;
    animation: rotate .5s infinite linear;

    @keyframes rotate {
        0%    { transform: rotate(0) }
        100%  { transform: rotate(360deg) }
      }
`

export const Loader = () => {

    return (
        <>
            <StyledLoader>
                <StyledLoaderIcon src={IconLoader} />
            </StyledLoader>
        </>
    )
}