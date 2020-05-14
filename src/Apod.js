import React, { useState, useEffect, useRef }from "react";
import axios from "axios";
import styled from "styled-components";



function Apod() {
    const [apod, setApod] = useState([]);
    let textItem = useRef(null);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=huR4rsguheIOwHQktaPUQF45DBbXuztNeUJKt2al")
        .then(response => {
            setApod(response.data);
        });
          
          
    }, []);

    
    const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 20px 2fr;
    grid-template-rows: .5fr .5fr 1fr;
    `

    const Title = styled.h1 `
    font-family: Helvetica Neue, Arial;
    font-weight: 700;
    font-size: 64px;
    text-align: center;
    letter-spacing: 1px;
    margin-left: 17px;
    `

    const Content = styled.div`
        margin: 0;
        grid-area: 2 / 1 / 3 /3;
        place-self: center;
    `
    const Explanation = styled.p `
        text-align: center;
        font-size: 18px;
        margin-left: 12px
        opacity: 0;
    `

    const Image = styled.img `
      width: 100%;
      grid-area:   2 / 4 / 3 / 5;
      place-self: stretch;
    `

    return (
        <GridContainer>
            <Content ref = {el => {textItem = el}}>
            <Title>{apod.title}</Title>
            <Explanation>{apod.explanation}</Explanation>
            </Content>
            <Image src = {apod.url}></Image>
        </GridContainer> 
    );
}

export default Apod; 