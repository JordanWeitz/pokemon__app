import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./pokemon.css";

function Pokemon({ pokemon, pokemonLength, i, handleModal }) {
	const [image, setImage] = useState("");
	const [stats, setStats] = useState([]);
	const [type, setType] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const url = pokemon?.pokemon?.url;
	useEffect(() => {
		// setIsLoading(true);
		if (i === 0) {
			// setIsLoading(true);
		}
		axios.get(url).then((res) => {
			setType(res.data.types[0].type.name);
			setImage(res?.data?.sprites?.front_default);
			setStats(res?.data?.stats);
			setIsLoading(false);
		});
	}, []);

	return (
		<div>
			<div
				className={`pokemon__card ${type}`}
				onClick={() => handleModal(pokemon)}
			>
				{isLoading ? (
					<>LOADING</>
				) : (
					<>
						<h1 className="pokemon__card__name">{pokemon?.pokemon?.name}</h1>
						<img src={image} alt="" className="pokemon__card__img" />
					</>
				)}
			</div>
		</div>
	);
}

export default Pokemon;
