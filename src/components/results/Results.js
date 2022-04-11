import React from "react";
import PokeModal from "../pokeModal/PokeModal";
import "./results.css";

import Pokemon from "../pokemon/Pokemon";

function Results({ pokemon }) {
	const [modal, setModal] = React.useState(false);

	const handleModal = (pokemonForModal) => {
		setModal(true);
	};

	return (
		<>
			<PokeModal className={`${modal} ? "" : "hidden"`} />
			<div className="results__wrapper">
				<div className="results">
					{pokemon.map((pokemon, i) => {
						return (
							<Pokemon pokemon={pokemon} key={i} handleModal={handleModal} />
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Results;
