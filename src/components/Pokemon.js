import React, { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokeList, setPokeList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokeList(response.results);
        console.log(response.results);
      });
  }, []);

  const buttonHandler = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div>
      <button onClick={buttonHandler}>Fetch Pokemon</button>
      {buttonClicked &&
        pokeList.map((poke, index) => {
          return <div key={index}>{poke.name} </div>;
        })}
    </div>
  );
};

export default Pokemon;
