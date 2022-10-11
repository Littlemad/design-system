import React from "react";
import Highlighter from "../../components/Highlighter/Highlighter";
import * as Code from "./PageGridSystem.highlight";
import "./PageGridSystem.scss";

function GridSystem() {
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
				<div className="exp1 cols spacing">
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col">Col1</div>
					<div className="col col--span2">Col2</div>
					<div className="col col--span2">Col2</div>
					<div className="col col--span2">Col2</div>
					<div className="col col--span2">Col2</div>
					<div className="col col--span2">Col2</div>
					<div className="col col--span2">Col2</div>
					<div className="col col--span3">Col3</div>
					<div className="col col--span3">Col3</div>
					<div className="col col--span3">Col3</div>
					<div className="col col--span3">Col3</div>
					<div className="col col--span4">Col4</div>
					<div className="col col--span4">Col4</div>
					<div className="col col--span4">Col4</div>
					<div className="col col--span6">Col6</div>
					<div className="col col--span6">Col6</div>
					<div className="col col--span12">Col12</div>
				</div>
				<p>Lore ipsum docet aliquam</p>
				<Highlighter code={Code.ColSpan1} language="markup" />
			</div>
		</>
	);
}

export default GridSystem;
