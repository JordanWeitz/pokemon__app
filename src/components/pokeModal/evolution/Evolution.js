import React from "react";
import axios from "axios";
import arrow from "../../../assets/arrow.png";

import "./evolution.css";

function Evolution({ pokemon }) {
	const [loading, setLoading] = React.useState(true);
	const [evolutions, setEvolutions] = React.useState([]);
	// console.log(pokemon);

	React.useEffect(() => {
		setLoading(true);
		axios.get(pokemon?.species?.url).then((res) => {
			const evolution = res?.data?.evolution_chain?.url;

			axios.get(evolution).then((res) => {
				const chain = res?.data?.chain;
				console.log(res.data);
				const evolution1 = chain.evolves_to[0].species;
				const evolution2 = chain.evolves_to[0].evolves_to[0].species;
				axios
					.get(`https://pokeapi.co/api/v2/pokemon/${evolution1.name}`)
					.then((res) => {
						let evolve1 = res?.data;
						axios
							.get(`https://pokeapi.co/api/v2/pokemon/${evolution2.name}`)
							.then((res) => {
								let evolve2 = res?.data;
								setEvolutions([evolve1, evolve2]);
								setLoading(false);
							})
							.catch((err) => {
								console.log(err);
							});
					})
					.catch((err) => {
						console.log(err);
					});
			});
		});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className="evolution">
				<h2 className="evolution__header">Evolution</h2>
				{evolutions[0] && (
					<div className="evolution__chain">
						<div className="evolution__chain__img__wrapper">
							<img src={pokemon?.sprites?.front_default} alt="" />
						</div>
						<div className="arrow__wrapper">
							<img src={arrow} alt="" className="arrow" />
						</div>
						<div className="evolution__chain__img__wrapper">
							<img src={evolutions[0].sprites?.front_default} alt="" />
						</div>
					</div>
				)}
				{evolutions[1] && (
					<div className="evolution__chain">
						<div className="evolution__chain__img__wrapper">
							<img src={evolutions[0].sprites?.front_default} alt="" />
						</div>
						<div className="arrow__wrapper">
							<img src={arrow} alt="" className="arrow" />
						</div>
						<div className="evolution__chain__img__wrapper">
							<img src={evolutions[1].sprites?.front_default} alt="" />
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Evolution;
