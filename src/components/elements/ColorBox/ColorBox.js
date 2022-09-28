import React from "react";
import "./ColorBox.scss";

const ColorBox = (props) => {
	return (
		<div className="colorbox">
			<div className="colorbox__color"></div>
			<div className="colorbox__val">color value</div>
		</div>
	);
};

export default ColorBox;
