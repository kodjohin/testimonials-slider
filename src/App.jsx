import React from 'react';
import Silder from './components/Silder';
import styled from 'styled-components';


const StyledApp = styled.div`
    width: 375px;
    background-color: "red";
    diplay: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    margin-top: 70px;
    padding-bottom: 100px;
`;


const App = () => {
    
    const subscribers = [
        {
            fullName: "Tanya Sinclair",
            job: "UX Engineer",
            image:"Tanya",
            testimony: '"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."'
        },
        {
            fullName: "John Tarkpor",
            job: "Junior Front-end Developer",
            image:"John",
            testimony: '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."'
        }
    ]

    return (
        <StyledApp>
            <Silder data={subscribers}/>
        </StyledApp>
    )
}

export default App