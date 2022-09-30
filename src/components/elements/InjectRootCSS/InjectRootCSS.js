import React from "react";
import dataJSON from "../../../data/data.json";

const InjectRootCSS = () => {
	const colorsJSON = dataJSON.colors;

	const colorVariables = () => {
		const colorList = colorsJSON
			.map((colors) => `--color-${colors.color}:${colors.value};`)
			.join("");
		return colorList;
	};
	const injectCSS = `:root{${colorVariables()}}`;

	return (
		<>
			<style>{injectCSS}</style>
		</>
	);
};

export default InjectRootCSS;
