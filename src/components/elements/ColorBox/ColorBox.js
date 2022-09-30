import React from "react";
import dataJSON from "../../../data/data.json";
import "./ColorBox.scss";

const colorsJSON = dataJSON.colors;

const ColorBox = (props) => {
	const myColor = colorsJSON.find((e) => e.color === props.color);

	return (
		<>
			<div className="colorbox">
				<div className={`colorbox__color colorbox__color--${myColor.color}`}></div>
				<div className="colorbox__val">
					{myColor.name}
					<br />
					{myColor.value}
				</div>
			</div>
		</>
	);
};

export default ColorBox;
