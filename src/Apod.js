import React, { useState, useEffect }from "react";
import axios from "axios";
import styled from "styled-components";


function Apod() {
    const [apod, setApod] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=huR4rsguheIOwHQktaPUQF45DBbXuztNeUJKt2al")
        .then(response => {
            setApod(response.data);
        });
    }, []);

    console.log(apod)

    return (
        <div className="App">
            <h1>{apod.copyright}</h1>
            <p>{apod.explanation}</p>
            <img src = {apod.url}></img>
        </div>
    );
}

export default Apod; 