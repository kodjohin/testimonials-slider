import React, { useState } from 'react'
import styled from 'styled-components';

import Tanya from "../images/image-tanya.jpg";
import John from "../images/image-john.jpg";
import SlideButton from './SlideButton';

const StyledImg = styled.img`
    width: 250px;
    border-radius: 5px;
    color: var(--grayish-blue);
    box-shadow: 0em 2em 3em;
`;
const StyledH3 = styled.h3`
    margin-bottom: 5px;
`;
const Styledp = styled.p`
    margin: 20px 25px;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 300;
    padding-top: 50px
`;

const StyledSpan = styled.span`
    color: var(--grayish-blue);
`;

const Silder = ({data}) => {
    const images = {
        Tanya:Tanya,
        John:John
    }
    const [count, setCount] = useState(0)

    const onPrevHandler = () => {
        if(count > 0){
            setCount(prevCount => prevCount - 1);
        }
    }
    const onNextHandler = () => {
        if(count < data.length - 1){
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            <StyledImg src={images[data[count].image]} alt="subscriber" />
            <SlideButton onPrevHandler={onPrevHandler} onNextHandler={onNextHandler}/>
            <Styledp>{data[count].testimony}</Styledp>
            <StyledH3>{data[count].fullName}</StyledH3>
            <StyledSpan>{data[count].job}</StyledSpan>
        </div>
    )
}

export default Silder
