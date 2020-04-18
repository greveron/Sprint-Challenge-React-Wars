// Write your Character component here
import React from "react";
import styled from "styled-components";

//Styled Component
const Principal = styled.div` 
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: stretch;
  border: 1px solid white;
  background-color:none;
  color:white;
  width: 80%;
  margin: 0 auto;
  height: 50%;
  padding: 0%;
  text-align: justify;
  text-shadow: 5px 2px 5px black;
`;


const Character = props => {
    const persona = props.persona;
    console.log(props.persona);
    return (
        <div>
            <Principal>
                <p>Name :  {persona.name}</p>
                <p>Birth Year : {persona.birth_year}</p>
                <p>Height : {persona.height}</p>
                <p>Gender : {persona.gender}</p>
                <p> Eyes Color : {persona.eye_color}</p>
            </Principal>
        </div>
    );
};

export default Character;
