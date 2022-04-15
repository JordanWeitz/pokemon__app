import React from "react";
import Search from "../search/Search";

import pikachu from "../../assets/pikachu.png";

import "./navbar.css";

function Navbar({ setTypeChoice, handleSearch }) {
	return (
		<div className="navbar">
			<a>
				<div className="navbar__logo__wrapper">
					<img
						src={pikachu}
						alt=""
						className="navbar__logo"
						onClick={() => setTypeChoice("")}
					/>
				</div>
			</a>
			<Search handleSearch={handleSearch} />
		</div>
	);
}

export default Navbar;
