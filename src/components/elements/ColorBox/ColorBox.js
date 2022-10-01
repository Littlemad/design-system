import React from "react";
import dataJSON from "../../../data/data.json";
import "./ColorBox.scss";

const colorsJSON = dataJSON.colors;

const ColorBox = (props) => {
	const myColor = colorsJSON.find((e) => e.color === props.color);

	return (
		<>
			<div className="colorbox">
				<div className="colorbox__name">{myColor.name}</div>
				<div className={`colorbox__color color-bg--${myColor.color}`}></div>
				<div className="colorbox__val">
					<p>
						<strong>{myColor.value}</strong>
					</p>
					<code>{myColor.color}</code>
				</div>
			</div>
		</>
	);
};

export default ColorBox;
