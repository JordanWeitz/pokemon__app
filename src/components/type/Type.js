import React from "react";
import "./type.css";
import color from "../../colorPicker";

function Type({ type, handleTypeChoice }) {
	return (
		<div className="type">
			<div className="type__wrapper">
				{type?.map((type, i) => {
					return (
						<div
							className={`type__card ${type?.name}`}
							onClick={() => handleTypeChoice(type)}
							key={type?.name}
						>
							<h1 className="type__card__name">{type?.name.toUpperCase()}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Type;
