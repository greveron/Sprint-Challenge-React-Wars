// Write your Character component here
import React from "react";
import styled from "styled-components";

//Styled Component
const Principal = styled.div` 
display: flex;
  padding: 5px;
  height: 90px;
  
  background-color:none;
  color: white;
`;
const Nombre = styled.div`
margin: 0 auto;
  width: 280px;
  border: solid 1px white;
  padding: 5px;
  height: 80px;
  text-align: center;
`;

const Nombre1 = styled.span`
display: flex;
  justify-content: space-between;
  width: auto;
`;

const Nacimiento = styled.div`
text-align: center;
  height: 85px;
  padding: 5px;
  border: solid 1px white;
  width: 230px;
`;

const Nacimiento2 = styled.span`
width: 200px;
  text-align: center;
  height: 100px;
  padding: 5px;
`;

const Altura = styled.div`
width: 180px;
margin: auto;
border: solid 1px white;
height: 50px;
text-align: center;
`;

const Genero = styled.div`
width: 150px;
  border: solid 1px white;
  margin: auto;
  height: 80px;
`;
const Colorojos = styled.div`
border: solid 1px white;
  width: 150px;
  text-align: center;
`;

const Character = props => {
    const persona = props.persona;
    console.log(props.persona);
    return (
        <Principal>
            <Nombre>
                <Nombre1> Name: </Nombre1>
                <span>{persona.name}</span>
            </Nombre>
            <Nacimiento>
                <span>Birth Year: </span>
                <Nacimiento2> {persona.birth_year}</Nacimiento2>
            </Nacimiento>
            <Altura> Height: {persona.height}</Altura>
            <Genero>Gender: {persona.gender}</Genero>
            <Colorojos> Eyes Color {persona.eye_color}</Colorojos>
        </Principal>
    );
};

export default Character;
