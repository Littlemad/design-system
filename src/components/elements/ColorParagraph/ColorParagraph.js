import React from "react";
import dataJSON from "../../../data/data.json";

const colorsJSON = dataJSON.colors;

const ColorParagraph = () => {
	const ParagraphParam = (props) => {
		return (
			<>
				<p className={`color-txt--${props.var}`}>
					<code>{props.var}</code>
				</p>
			</>
		);
	};
	const ParagraphsContent = () => {
		const ParagraphListNames = colorsJSON.map((colorsDetail, index) => <ParagraphParam color={colorsDetail.var} key={index} />);
		return <>{ParagraphListNames}</>;
	};
	return (
		<>
			<ParagraphsContent />
		</>
	);
};

export default ColorParagraph;
