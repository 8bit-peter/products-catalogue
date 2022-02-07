import React , { useContext } from "react";
import styled from "styled-components";
import IconSearch from '../../../assets/svg/icon-search.svg';
import { ProductsContext } from '../../context/ContextProvider';


const StyledHeader = styled.header`
    display: flex;
    padding: 52px 108px;
    background-color: ${({ theme }) => theme.color.white};
    align-items: center;

    ${({ theme }) => theme.mq.s} {
        display: grid;
        grid-template-areas: "logo login"
                        "search search"
                        "filters filters";
        grid-row-gap: 24px;
    }

    ${({ theme }) => theme.mq.xs} {
            padding: 53px 24px 32px 24px;
    }
`;

const StyledLogo = styled.h2`
    margin-right: 105px;
    font-size: 24px;
    line-height: 40px;

    ${({ theme }) => theme.mq.s} {
        grid-area: logo;
        margin-right: 0;
    }
`

const StyledInputBox = styled.div`
    position: relative;

    ${({ theme }) => theme.mq.s} {
        grid-area: search;
    }
`

const StyledInputIcon = styled.img`
    content: '';
    position: absolute;
    right: 16px;
    top: 16px;
    width: 17px;
    height: 17px;
    background-image: url(${IconSearch});
    cursor: pointer;
`

const StyledInput = styled.input`
    border: 1px solid ${({ theme }) => theme.color.gray_300};
    border-radius: 8px;
    padding: 16px;
    font-size: 14px;
    line-height: 16px;
    width: 392px;

    ${({ theme }) => theme.mq.s} {
        width: 100%;
    }
`

const StyledFiltersBox = styled.div`
    display: flex;
    justify-content: space-between;

    ${({ theme }) => theme.mq.s} {
        grid-area: filters;
        justify-content: flex-start;
    }
`

const StyledFilterBox = styled.div`
    display: flex;
    align-items: center;

        &:first-of-type {
            ${({ theme }) => theme.mq.s} {
                margin-right: 32px;
            }
        }

        input {
        height: 24px;
        width: 24px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        position: relative;
        margin: 0 8px 0 32px;
        border-radius: 4px;

            &:first-of-type {
                margin-left: 24px;
                ${({ theme }) => theme.mq.s} {
                    margin-left: 0;
                }
            }

            &:after {
                content: '';
                position: absolute;
                height: 24px;
                width: 24px;
                border-radius: 4px;
                border: 1px solid ${({ theme }) => theme.color.gray_300};
                cursor: pointer;
                box-sizing: border-box;
            }

            &:checked {
                background-color: ${({ theme }) => theme.color.blue_400};

                &:after {
                    width: 4px;
                    height: 12px;
                    border: 2px solid ${({ theme }) => theme.color.white};
                    border-top: 0;
                    border-left: 0;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
            }

            & + label {
                font-size: 14px;
                line-height: 16px;
            }
        }
`

const StyledLoginButton = styled.button`
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.blue_400};
    border-radius: 4px;
    padding: 11px 24px;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.blue_400};
    margin-left: auto;
    transition: background .3s, color .3s;
    cursor: pointer;

        &:hover {
            background: ${({ theme }) => theme.color.blue_700};
            color: ${({ theme }) => theme.color.white};
        }

    ${({ theme }) => theme.mq.s} {
        grid-area: login;
    }
`

export const Header = () => {
const Context = useContext(ProductsContext);

const handleSearch = (e) => {
    let inputValue;
    e.target.nodeName === 'IMG' ? inputValue = e.target.previousSibling.value : inputValue = e.target.value

    Context.setProductData((prevState) => ({
        ...prevState,
        searchQuery: inputValue !== '' ? inputValue : '',
        activePage: 1
    }))
}

const handleActive = (e) => {
    const activeStatus = e.target.checked

    Context.setProductData((prevState) => ({
        ...prevState,
        isActive: activeStatus,
        activePage: 1
    }))
}

const handlePromo = (e) => {
    const promoStatus = e.target.checked

    Context.setProductData((prevState) => ({
        ...prevState,
        isPromo: promoStatus,
        activePage: 1
    }))
}

return (
    <>
      <StyledHeader>
        <StyledLogo>Products catalogue</StyledLogo>
          
        <StyledInputBox>
            <StyledInput type="text" placeholder='Search' onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}/>
            <StyledInputIcon src={IconSearch} onClick={(e) => handleSearch(e)} />
        </StyledInputBox>

        <StyledFiltersBox>
            <StyledFilterBox>
                <input type="checkbox" name="active" id="active" onClick={(e) =>  handleActive(e)} />
                <label htmlFor="active">Active</label>
            </StyledFilterBox>

            <StyledFilterBox>
                <input type="checkbox" name="promo" id="promo" onClick={(e) => handlePromo(e)} />
                <label htmlFor="promo">Promo</label>
            </StyledFilterBox>
        </StyledFiltersBox>

        <StyledLoginButton>Login</StyledLoginButton>
      </StyledHeader>
    </>
  );
};
