import React from "react";
import Search from "../search/Search";

import pikachu from "../../assets/pikachu.png";

import "./navbar.css";

function Navbar() {
	return (
		<div className="navbar">
			<a>
				<div className="navbar__logo__wrapper">
					<img src={pikachu} alt="" className="navbar__logo" />
				</div>
			</a>
			<Search />
		</div>
	);
}

export default Navbar;
