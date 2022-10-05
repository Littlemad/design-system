import React from "react";
import dataJSON from "../../../data/data.json";
import "./ColorBox.scss";

const colorsJSON = dataJSON.colors;
const linksJSON = dataJSON.links;

const ColorBox = (props) => {
	var myColor = colorsJSON.find((e) => e.var === props.var);

	// TODO: revise this, it is not decent code
	if (myColor === undefined) {
		myColor = linksJSON.find((e) => e.var === props.var);
	}

	return (
		<>
			<div className="colorbox">
				<div className="colorbox__name">{myColor.name}</div>
				<div className={`colorbox__color color-bg--${myColor.var}`}></div>
				<div className="colorbox__val">
					<p>
						<strong>{myColor.value}</strong>
					</p>
					<code>{myColor.var}</code>
				</div>
			</div>
		</>
	);
};

export default ColorBox;
