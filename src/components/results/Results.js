import React from "react";
import PokeModal from "../pokeModal/PokeModal";
import "./results.css";

import Pokemon from "../pokemon/Pokemon";

function Results({ pokemon, setIsLoading, isLoading }) {
	const [modal, setModal] = React.useState(false);
	const [pokemonToShow, setPokemonToShow] = React.useState([]);

	const [startingPoke, setStartingPoke] = React.useState(0);
	const [endingPoke, setEndingPoke] = React.useState(15);
	const [pokemonLength] = React.useState(pokemon.length);

	console.log("HELLO");
	// this will open the modal with the pokemon that the user clicked on
	const handleModal = (pokemonChosen) => {
		setPokemonToShow(pokemonChosen);
		setModal(true);
		console.log(modal);
	};
	// this will close the modal
	const handleClose = () => {
		setModal(false);
	};

	const nextPage = () => {
		setEndingPoke(endingPoke + 15);
	};

	if (isLoading === true) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<div className="results__wrapper">
					<div className="results">
						<div className="results__flex__wrap">
							{pokemon.slice(startingPoke, endingPoke).map((pokemon, i) => {
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
							})}
						</div>
						<div className="results__next__wrapper">
							<button onClick={() => nextPage()} className="results__next__btn">
								NEXT
							</button>
						</div>
						<div
							className={`results__pokeModal__wrapper ${modal ? "appear" : ""}`}
						>
							<div className="results__pokeModal__container">
								<PokeModal
									pokemonToShow={pokemonToShow}
									setIsLoading={setIsLoading}
									handleClose={handleClose}
								/>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Results;
