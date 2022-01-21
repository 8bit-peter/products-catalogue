import React , { useContext } from "react";
import styled from "styled-components";
import IconSearch from '../../../assets/svg/icon-search.svg';
import { GlobalContext } from '../../context/ContextProvider';


const StyledWrapper = styled.div`
display: flex;
padding: 52px 108px;
background-color: #fff;
align-items: center;
`;

const StyledLogo = styled.h2`
margin-right: 105px;
font-family: Nunito;
font-size: 24px;
font-weight: 600;
line-height: 40px;
`

const StyledInputBox = styled.div`
position: relative;

&:after {
    content: '';
    position: absolute;
    right: 16px;
    top: 16px;
    width: 17px;
    height: 17px;
    background-image: url(${IconSearch});
    pointer-events: none;
}
`

const StyledInput = styled.input`
border: 1px solid #E0E2EA;
border-radius: 8px;
padding: 16px;
font-family: Nunito;
font-size: 14px;
font-weight: 600;
line-height: 16px;
width: 392px;
`

const StyledFiltersBox = styled.div`
display: flex;
justify-content: space-between;
`

const StyledFilterBox = styled.div`
display: flex;
align-items: center;

    input {
    height: 24px;
    width: 24px;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    margin: 0 8px 0 32px;
    border-radius: 4px;

        &:first-of-type {
            margin-left: 24px;
        }

        &:after {
            content: '';
            position: absolute;
            height: 24px;
            width: 24px;
            border-radius: 4px;
            border: 1px solid #E0E2EA;
            cursor: pointer;
            box-sizing: border-box;
        }

        &:checked {
            background-color: #4460F7;

            &:after {
                width: 4px;
                height: 12px;
                border: 2px solid #fff;
                border-top: 0;
                border-left: 0;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }

        & + label {
            font-family: Nunito;
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;
        }
    }
`

const StyledLoginButton = styled.button`
background: #FFFFFF;
border: 1px solid #4460F7;
border-radius: 4px;
padding: 11px 24px;
font-family: Nunito;
font-weight: 600;
font-size: 14px;
line-height: 16px;
color: #4460F7;
margin-left: auto;
transition: background .3s, color .3s;
cursor: pointer;

    &:hover {
        background: #2140E8;
        color: #fff;
    }
`

export const Header = () => {
const Context = useContext(GlobalContext);

const handleSearch = (e) => {
    let inputValue = e.target.value;

    Context.updateSearch(inputValue);
}

return (
    <>
      <StyledWrapper>
          <StyledLogo>join.tsh.io</StyledLogo>
          
            <StyledInputBox>
                <StyledInput type="text" placeholder='Search' onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}/>
            </StyledInputBox>

            <StyledFiltersBox>
                <StyledFilterBox>
                    <input type="checkbox" name="active" id="active" onClick={() =>  Context.toggleActive()} />
                    <label htmlFor="active">Active</label>
                </StyledFilterBox>

                <StyledFilterBox>
                    <input type="checkbox" name="promo" id="promo" onClick={() => Context.togglePromo()} />
                    <label htmlFor="promo">Promo</label>
                </StyledFilterBox>
            </StyledFiltersBox>

            <StyledLoginButton>Login</StyledLoginButton>
      </StyledWrapper>
    </>
  );
};
