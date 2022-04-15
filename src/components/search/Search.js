import React from "react";
import "./search.css";

function Search({ handleSearch }) {
	return (
		<div className="search">
			<input
				type="text"
				placeholder="search here..."
				className="search__input"
				onKeyUp={(e) => handleSearch(e)}
			/>
		</div>
	);
}

export default Search;
