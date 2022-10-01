import React from "react";
import ColorBox from "../../components/elements/colorbox/ColorBox";
import ColorParagraph from "../../components/elements/ColorParagraph/ColorParagraph";

import "./ColorsLayout.scss";

const Colors = () => {
	return (
		<>
			- add column system
			<br />
			- Investigate theming
			<br />
			- Review naming system and organization of files
			<br />
			<div className="box-palette">
				<div className="box-palette__primary">
					<h2 className="h2 bold title--margin">Design Palette</h2>
					<p className="spacing--top">The colors listed in this area are all loaded directly from the data.json, and injected directly inside the react project as custom-variables</p>
					<p>We use 4 set of colors:</p>
					<ul className="list spacing">
						<li className="list__li">
							<strong>Basic</strong> - Which consist in white, black and palette of greys.
						</li>
						<li className="list__li">
							<strong>Primary</strong> - Your dominant colors through your design
						</li>
						<li className="list__li">
							<strong>Secondary</strong> - Your less dominant but still very relevant colors
						</li>
						<li className="list__li">
							<strong>Accents</strong> - Colors used for indicating system related alerts and warnings, like fail red, success green and yellow warnings
						</li>
					</ul>

					<div className="box">
						<h2 className="h2 bold box__title">Basic</h2>
						<div className="box-palette__grid">
							<ColorBox color="black" />
							<ColorBox color="grey-d3" />
							<ColorBox color="grey-d2" />
							<ColorBox color="grey-d1" />
							<ColorBox color="grey" />
							<ColorBox color="grey-l1" />
							<ColorBox color="grey-l2" />
							<ColorBox color="grey-l3" />
							<ColorBox color="white" />
						</div>
					</div>
					<div className="box">
						<h2 className="h2 bold box__title">Primary</h2>
						<div className="box-palette__grid">
							<ColorBox color="primary-d2" />
							<ColorBox color="primary-d1" />
							<ColorBox color="primary" />
							<ColorBox color="primary-l1" />
							<ColorBox color="primary-l2" />
						</div>
					</div>
					<div className="box">
						<h2 className="h2 bold box__title">Secondary</h2>
						<div className="box-palette__grid">
							<ColorBox color="secondary-d2" />
							<ColorBox color="secondary-d1" />
							<ColorBox color="secondary" />
							<ColorBox color="secondary-l1" />
							<ColorBox color="secondary-l2" />
						</div>
					</div>

					<div className="box">
						<h2 className="h2 bold box__title">Accent</h2>
						<div className="box-palette__grid">
							<ColorBox color="success" />
							<ColorBox color="warn" />
							<ColorBox color="fail" />
						</div>
					</div>
					<div className="box">
						<h2 className="h2 bold box__title">Text Colors &amp; Contrast</h2>
						<div className="box-text-colors">
							<div className="cols">
								<div className="cols__col color-bg--black">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--grey-d2">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--grey">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--grey-l1">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--grey-l2">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--white">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--primary-d2">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--primary">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--primary-l2">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--secondary-d2">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--secondary">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--secondary-l2">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--success">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--warn">
									<ColorParagraph />
								</div>
								<div className="cols__col color-bg--fail">
									<ColorParagraph />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Colors;
