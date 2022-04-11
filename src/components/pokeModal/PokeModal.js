import React from "react";
import axios from "axios";

import Stats from "./stats/Stats";
import Evolution from "./evolution/Evolution";
import About from "./about/About";

function PokeModal({ pokemonToShow, setIsLoading }) {
	const [pokemon, setPokemon] = React.useState([]);
	const [image, setImage] = React.useState("");
	const [infoSelect, setInfoSelect] = React.useState("about");

	/*
	 *   This is the useEffect hook that will be called when the component is rendered.
	 *   It will fetch the pokemon data from the API and set the state of the pokemon
	 */
	React.useEffect(() => {
		axios.get(pokemonToShow.pokemon.url).then((res) => {
			console.log(res.data);
			setPokemon(res.data);
			setImage(res.data.sprites.front_default);
		});
	}, [pokemonToShow]);

	const handleInfoSelect = (selection) => {
		setInfoSelect(selection);
	};

	return (
		<div className="pokeModal">
			<div className="pokeModal__wrapper">
				<h1 className="pokeModal__name">{pokemon.name}</h1>
				<div className="pokeModal__types">
					{pokemon?.types?.map((type, i) => {
						return (
							<div className="pokeModal__type" key={i}>
								{type.type.name}
							</div>
						);
					})}
				</div>
				<img src={image} alt="" />
				<div className="pokeModal__info">
					<ul className="pokeModal__info__selector">
						<li
							className="pokeModal__about"
							onClick={() => handleInfoSelect("about")}
						>
							ABOUT
						</li>
						<li
							className="pokeModal__stats"
							onClick={() => handleInfoSelect("stats")}
						>
							STATS
						</li>
						<li
							className="pokeModal__evolution"
							onClick={() => handleInfoSelect("evolution")}
						>
							EVOLUTION
						</li>
					</ul>
					<div className="pokeModal__info__content">
						{infoSelect === "about" && <About pokemon={pokemon} />}
						{infoSelect === "stats" && <Stats pokemon={pokemon} />}
						{infoSelect === "evolution" && <Evolution pokemon={pokemon} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default PokeModal;
