import Type from "./components/type/Type";
import Navbar from "./components/navbar/Navbar";
import Results from "./components/results/Results";

import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [type, setType] = useState([]);
	const [typeChoice, setTypeChoice] = useState("");
	const [pokemon, setPokemon] = useState([]);

	// this function gets called when a user clicks on a type card
	const handleTypeChoice = (choice) => {
		console.log(choice);
		setTypeChoice(choice.url);
	};

	// this runs on page load and fetches all the different pokemon types so that
	// the user can choose one to search for via the Type component
	useEffect(() => {
		axios.get("https://pokeapi.co/api/v2/type").then((res) => {
			setType(res.data.results);
			setIsLoading(false);
		});
	}, []);

	// this useEffect will run when typeChoice changes and will fetch
	// the pokemon of the type that the user chose
	useEffect(() => {
		setIsLoading(true);

		if (typeChoice !== "") {
			axios.get(`${typeChoice}`).then((res) => {
				setPokemon(res.data.pokemon);
				setIsLoading(false);
			});
		}
	}, [typeChoice]);

	const handleSearch = (e) => {
		e.preventDefault();
		if (e.keyCode === 13) {
			let temp = pokemon;
			temp = temp.filter((pokemon) => {
				return pokemon.pokemon.name
					.toLowerCase()
					.includes(e.target.value.toLowerCase());
			});
			setPokemon(temp);
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className="App">
				<Navbar setTypeChoice={setTypeChoice} handleSearch={handleSearch} />
				{typeChoice === "" && (
					<Type type={type} handleTypeChoice={handleTypeChoice} />
				)}
				{typeChoice !== "" && (
					<Results
						pokemon={pokemon}
						isLoading={isLoading}
						setIsLoading={setIsLoading}
					/>
				)}
			</div>
		);
	}
}

export default App;
