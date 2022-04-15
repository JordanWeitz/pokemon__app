import React from "react";
import StatBar from "../statBar/StatBar";

import "./stats.css";

function Stats({ pokemon }) {
	console.log(pokemon, "POKEMON");
	const HP = pokemon?.stats.find((stat) => stat.stat.name === "hp");
	const attack = pokemon?.stats.find((stat) => stat.stat.name === "attack");
	const defense = pokemon?.stats.find((stat) => stat.stat.name === "defense");
	const spAttack = pokemon?.stats.find(
		(stat) => stat.stat.name === "special-attack"
	);
	const spDefense = pokemon?.stats.find(
		(stat) => stat.stat.name === "special-defense"
	);
	const speed = pokemon?.stats.find((stat) => stat.stat.name === "speed");
	console.log(HP, "HP");
	// TODO: add animation to stat bars when they initially load!
	return (
		<div className="stats">
			<div className="stats__wrapper">
				<table className="stats__table">
					<tr className="stats__table__row">
						<th className="stats__table__header">HP</th>
						<td className="stats__table__item">{HP?.base_stat}</td>
						<td className="stats__table__bar">
							<StatBar level={HP?.base_stat} />
						</td>
					</tr>
					<tr className="stats__table__row">
						<th className="stats__table__header">Attack</th>
						<td className="stats__table__item">{attack?.base_stat}</td>
						<td className="stats__table__bar">
							<StatBar level={attack?.base_stat} />
						</td>
					</tr>
					<tr className="stats__table__row">
						<th className="stats__table__header">Defense</th>
						<td className="stats__table__item">{defense?.base_stat}</td>
						<td className="stats__table__bar">
							<StatBar level={defense?.base_stat} />
						</td>
					</tr>
					<tr className="stats__table__row">
						<th className="stats__table__header">Sp. Atk</th>
						<td className="stats__table__item">{spAttack?.base_stat}</td>
						<td className="stats__table__bar">
							<StatBar level={spAttack?.base_stat} />
						</td>
					</tr>
					<tr className="stats__table__row">
						<th className="stats__table__header">Sp. Def</th>
						<td className="stats__table__item">{spDefense?.base_stat}</td>
						<td className="stats__table__bar">
							<StatBar level={spDefense?.base_stat} />
						</td>
					</tr>
					<tr className="stats__table__row">
						<th className="stats__table__header">Speed</th>
						<td className="stats__table__item">{speed?.base_stat}</td>
						<td className="stats__table__bar">
							<StatBar level={speed?.base_stat} />
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default Stats;
