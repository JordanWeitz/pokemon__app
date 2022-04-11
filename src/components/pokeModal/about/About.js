import React from "react";
import "./about.css";

function About({ pokemon }) {
	const weightKG = pokemon?.weight / 10;
	const weightLBS = (weightKG * 2.20462).toFixed(1);

	return (
		<div className="about">
			<table>
				<tr>
					<th>Name</th>
					<td>{pokemon.name}</td>
				</tr>
				<tr>
					<th>Height</th>
					<td>{(pokemon.height / 10.0).toFixed(2) + "m"}</td>
				</tr>
				<tr>
					<th>Weight</th>
					<td>{`${weightLBS}lbs (${weightKG}kg)`}</td>
				</tr>
				<tr>
					<th>Abilities</th>
					<td>
						{pokemon?.abilities?.map((ability, i) => {
							if (i === pokemon.abilities.length - 1) {
								return ability.ability.name;
							} else {
								return ability.ability.name + ", ";
							}
						})}
					</td>
				</tr>
			</table>
		</div>
	);
}

export default About;
