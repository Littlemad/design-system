import React from "react";
import dataJSON from "../../../data/data.json";

const colorsJSON = dataJSON.colors;

const ColorParagraph = () => {
	const ParagraphParam = (props) => {
		return (
			<>
				<p className={`color-txt--${props.color}`}>
					<code>{props.color}</code>
				</p>
			</>
		);
	};
	const ParagraphsContent = () => {
		const ParagraphListNames = colorsJSON.map((colorsDetail) => (
			<ParagraphParam color={colorsDetail.color} />
		));
		return <>{ParagraphListNames}</>;
	};
	return (
		<>
			<ParagraphsContent />
		</>
	);
};

export default ColorParagraph;
