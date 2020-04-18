import React, { useState, useEffect } from "react";
import Character from "./Character";
import axios from "axios";

const CharacterList = () => {
    const [startwar, setStartwar] = useState([]);
    useEffect(() => {
        axios
            .get("https://swapi.py4e.com/api/people/")

            .then(retorno => {
                setStartwar(retorno.data.results);
            })
            .catch(error => {
                console.log("error!", error);
            });
    }, []);

    return (
        <div>
            <h1>
                SWAPI
        <p>The Star Wars API</p>
            </h1>
            {startwar.map(persona => {
                return <Character persona={persona} />;
            })}
        </div>
    );
};

export default CharacterList;
