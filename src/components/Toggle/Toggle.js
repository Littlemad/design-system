import React from "react";
import "./Toggle.scss";

const Toggle = (props) => {
	return (
		<label className={`toggle ${props.className}`}>
			<input onChange={props.onChange} type="checkbox" className="toggle__input" />
			<span className="toggle__slider"></span>
		</label>
	);
};

export default Toggle;
