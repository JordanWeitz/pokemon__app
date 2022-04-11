import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./pokemon.css";

function Pokemon({ pokemon, handleModal }) {
	const [image, setImage] = useState("");
	const [stats, setStats] = useState([]);

	const url = pokemon?.pokemon?.url;
	useEffect(() => {
		axios.get(url).then((res) => {
			setImage(res?.data?.sprites?.front_default);
			setStats(res?.data?.stats);
		});
	}, []);
	return (
		<div>
			<div className="pokemon__card" onClick={() => handleModal(pokemon)}>
				<h1 className="pokemon__card__name">{pokemon?.pokemon?.name}</h1>
				<img src={image} alt="" className="pokemon__card__img" />
			</div>
		</div>
	);
}

export default Pokemon;
