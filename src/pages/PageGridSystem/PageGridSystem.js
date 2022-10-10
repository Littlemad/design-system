import React from "react";
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
				<div className="experiment1 cols">
					<div className="col">Col1</div>
					<div className="col">Col2</div>
					<div className="col">Col3</div>
					<div className="col">Col4</div>
					<div className="col">Col5</div>
					<div className="col">Col6</div>
					<div className="col">Col7</div>
					<div className="col">Col8</div>
					<div className="col">Col9</div>
					<div className="col">Col10</div>
					<div className="col">Col11</div>
					<div className="col">Col12</div>
				</div>
			</div>
		</>
	);
}

export default GridSystem;
