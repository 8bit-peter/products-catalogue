import React from 'react';
import styled from "styled-components";

const StyledProduct = styled.div`
width: 100%;
max-width: 100%;
background-color: #fff;
border-radius: 8px;
`

const renderStars = (rating) => {
  let stars = [];

  for(let i = 1; i <= 5; i++) {
    if(i <= rating) {
      stars.push('+') 
    } else {
      stars.push('-') 
    }
  }

  return stars;
}

export const Product = ({product}) => {
  return (
    <>
        <StyledProduct>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div>
               {
                    // [...Array(product.rating),].map((value, index) => {
                    //   if ( index + 1 <= product.rating ) {
                    //     return <p id={index + 1} key={index}>{index + 1}</p>
                    //   } else if (index + 1 > product.rating) {
                    //     return <p id={index + 1} key={index}>0</p>
                    //   }
                    // })

                    renderStars(product.rating)
                }
            </div>
            <button disabled={!product.active}>
                {product.active ? 'Show details' : 'Unavaiable'}
            </button>
        </StyledProduct>
    </>
  );
};
