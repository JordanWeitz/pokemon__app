import React from "react";
import "./statBar.css";

function StatBar({ level }) {
	const color = level >= 50 ? "green" : "red";

	return (
		<div className="statBar__wrapper">
			<div className="statBar">
				<div
					style={{ width: `${level}%`, backgroundColor: `${color}` }}
					className="statBar__bar"
				></div>
			</div>
		</div>
	);
}

export default StatBar;
