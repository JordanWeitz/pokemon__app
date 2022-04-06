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
	const [typePokemon, setTypePokemon] = useState([]);

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
	});
	// this useEffect will run when typeChoice changes and will fetch
	// the pokemon of the type that the user chose
	useEffect(() => {
		setIsLoading(true);

		if (typeChoice !== "") {
			axios.get(typeChoice).then((res) => {
				console.log(res.data.pokemon);
				setTypePokemon(res.data.pokemon);
				setIsLoading(false);
			});
		}
	}, [typeChoice]);

	if (isLoading) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className="App">
				<Navbar />
				{typeChoice === "" && (
					<Type type={type} handleTypeChoice={handleTypeChoice} />
				)}
				{typeChoice !== "" && <Results typePokemon={typePokemon} />}
			</div>
		);
	}
}

export default App;
