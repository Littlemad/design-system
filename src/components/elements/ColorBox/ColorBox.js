import React from "react";
import dataJSON from "../../../data/data.json";
import "./ColorBox.scss";

const colorsJSON = dataJSON.colors;

const ColorBox = (props) => {
	const myColor = colorsJSON.find((e) => e.color === props.color);

	console.log(myColor);

	return (
		<>
			<div className="colorbox">
				<div className={`colorbox__color color-bg--${myColor.color}`}></div>
				<div className="colorbox__val">
					<strong>{myColor.value}</strong>
					<br />
					{myColor.name}
				</div>
			</div>
		</>
	);
};

export default ColorBox;
