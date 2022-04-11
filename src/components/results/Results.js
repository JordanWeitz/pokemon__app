import React from "react";
import PokeModal from "../pokeModal/PokeModal";
import "./results.css";

import Pokemon from "../pokemon/Pokemon";

function Results({ pokemon, setIsLoading, isLoading }) {
	const [modal, setModal] = React.useState(false);
	const [pokemonToShow, setPokemonToShow] = React.useState([]);
	const [pokemonLength] = React.useState(pokemon.length);
	console.log("HELLO");

	const handleModal = (pokemonChosen) => {
		setPokemonToShow(pokemonChosen);
		setModal(true);
	};

	if (isLoading === true) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<div className="results__wrapper">
					<div className="results">
						{modal === false ? (
							pokemon.map((pokemon, i) => {
								return (
									<Pokemon
										pokemon={pokemon}
										key={i}
										pokemonLength={pokemonLength}
										i={i}
										handleModal={handleModal}
										setIsLoading={setIsLoading}
									/>
								);
							})
						) : (
							<PokeModal
								pokemonToShow={pokemonToShow}
								setIsLoading={setIsLoading}
							/>
						)}
					</div>
				</div>
			</>
		);
	}
}

export default Results;
