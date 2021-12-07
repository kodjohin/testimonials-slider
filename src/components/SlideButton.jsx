import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Prev} from "../images/icon-prev.svg";
import {ReactComponent as Next} from "../images/icon-next.svg";

const StyledSlideButton= styled.div`
    background-color: #fff;
    border-radius: 30px;
    width: 90px;
    height: 40px;
    color: var(--grayish-blue);
    box-shadow: 0em .3em 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    margin-top: -25px;
    position:relative;
`;

const StyledButton= styled.button`
    height: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
`;

const SlideButton = ({onPrevHandler, onNextHandler}) => {
    return (
        <StyledSlideButton>
            <StyledButton onClick={() => onPrevHandler()}><Prev/></StyledButton>
            <StyledButton onClick={() => onNextHandler()}><Next/></StyledButton>
        </StyledSlideButton>
    )
}

export default SlideButton
