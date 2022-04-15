import React from "react";
import axios from "axios";

import Stats from "./stats/Stats";
import Evolution from "./evolution/Evolution";
import About from "./about/About";

import "./pokeModal.css";

function PokeModal({ pokemonToShow, setIsLoading, handleClose }) {
	const [pokemon, setPokemon] = React.useState([]);
	const [image, setImage] = React.useState("");
	const [type, setType] = React.useState("");
	const [aboutActive, setAboutActive] = React.useState(false);
	const [statsActive, setStatsActive] = React.useState(false);
	const [evolutionActive, setEvolutionActive] = React.useState(false);
	const [infoSelect, setInfoSelect] = React.useState("about");

	/*
	 *   This is the useEffect hook that will be called when the component is rendered.
	 *   It will fetch the pokemon data from the API and set the state of the pokemon
	 */
	React.useEffect(() => {
		axios.get(pokemonToShow?.pokemon?.url).then((res) => {
			console.log(res?.data);
			setPokemon(res?.data);
			setType(res.data.types[0].type.name);
			setImage(res?.data?.sprites?.front_default);
			setIsLoading(false);
			setAboutActive(true);
		});
	}, [pokemonToShow]);

	// I realize this is terrible code, but I'm not sure how to make it better.
	// This handles what information is displayed based on the tab the user selects.
	// if they select about then the about section is displayed etc...
	const handleInfoSelect = (selection) => {
		setInfoSelect(selection);
		switch (selection) {
			case "about":
				setAboutActive(true);
				setStatsActive(false);
				setEvolutionActive(false);
				break;
			case "stats":
				setAboutActive(false);
				setStatsActive(true);
				setEvolutionActive(false);
				break;
			case "evolution":
				setAboutActive(false);
				setStatsActive(false);
				setEvolutionActive(true);
				break;
		}
	};

	const handleReset = () => {
		handleInfoSelect("about");
		handleClose();
	};

	return (
		<div className="pokeModal">
			<div className="pokeModal__wrapper">
				<div className={`pokeModal__top__container ${type}`}>
					<div className="pokeModal__close__btn__wrapper">
						<h1 className="pokeModal__name">{pokemon.name}</h1>
						<button
							className="pokeModal__close__btn"
							onClick={() => handleReset()}
						>
							X
						</button>
					</div>

					<div className="pokeModal__types">
						{pokemon?.types?.map((type, i) => {
							return (
								<div className="pokeModal__type" key={i}>
									{type.type.name}
								</div>
							);
						})}
					</div>
					<div className="pokeModal__img__wrapper">
						<img src={image} alt="" className="pokeModal__img" />
					</div>
				</div>
				<div className="pokeModal__info">
					<ul className="pokeModal__info__selector">
						<li
							className={`pokeModal__select ${aboutActive ? "active" : ""}`}
							onClick={(e) => handleInfoSelect("about")}
						>
							About
						</li>
						<li
							className={`pokeModal__select ${statsActive ? "active" : ""}`}
							onClick={(e) => handleInfoSelect("stats")}
						>
							Stats
						</li>
						<li
							className={`pokeModal__select ${evolutionActive ? "active" : ""}`}
							onClick={(e) => handleInfoSelect("evolution")}
						>
							Evolution
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
