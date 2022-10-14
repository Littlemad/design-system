import React from "react";
import Highlighter from "../../components/Highlighter/Highlighter";
import * as Code from "./PageGridSystem.highlight";
import "./PageGridSystem.scss";

function GridSystem() {
	// it helps me to build column structure quite quickly
	const columnGenerator = (quantityDivs, gridClasses) => {
		const basciGridStructure = (
			<div className={gridClasses}>
				{[...Array(quantityDivs)].map((_, i) => (
					<div key={i} className={`grid__col grid__col${i + 1}`}>
						Col{i + 1}
					</div>
				))}
			</div>
		);

		return basciGridStructure;
	};

	return (
		<>
			<div className="box-grid-system">
				<h2 className="h2 bold title--margin">Flexible Grid system</h2>
				<p>One of the most important part of a webpage it is to have a decent grid system that is useful to build application that adapt based.</p>
				<p>The grid system is based on 12 grids.</p>
			</div>

			<div className="box flexible-grid">
				<h3 className="h2 bold box__title">Responsive Grid</h3>
				<p>*working in progress*</p>
				{columnGenerator(28, "spacing exp1 grid grid--gap-m grid--col-pad-s")}

				<p>Lore ipsum docet aliquam</p>
				<Highlighter code={Code.ColSpan1} language="markup" />
			</div>
		</>
	);
}

export default GridSystem;
