import React from "react";
import ColorBox from "../../components/elements/colorbox/ColorBox";

import "./ColorsLayout.scss";

const Colors = () => {
	const ParagraphsContent = () => {
		return (
			<>
				<p className="color-txt--white">Lorem ipsum</p>
				<p className="color-txt--grey-l3">Lorem ipsum</p>
				<p className="color-txt--grey-l2">Lorem ipsum</p>
				<p className="color-txt--grey-l1">Lorem ipsum</p>
				<p className="color-txt--grey">Lorem ipsum</p>
				<p className="color-txt--grey-d1">Lorem ipsum</p>
				<p className="color-txt--grey-d2">Lorem ipsum</p>
				<p className="color-txt--grey-d3">Lorem ipsum</p>
				<p className="color-txt--black">Lorem ipsum</p>
			</>
		);
	};

	return (
		<>
			- add column system
			<br />
			- Need to create a custom SASS function to assign depending on classnames background, border
			or text color based on the colorVariables
			<br />
			- Investigate theming
			<br />
			- Review naming system and organization of files
			<br />
			- Add font values as we did with colors that can be injected directly as var properties, so
			create a custom injectRootCSS
			<br />
			- Insert code to show how can be used
			<br />
			<br />
			<div className="box-palette">
				<div className="box-palette__primary">
					<h2 className="h2 bold spacing">Design Palette</h2>
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
						<h2 className="h2 bold box__title">Text Colors</h2>
						<div className="box-text-colors">
							<div className="col">
								<div className="col1 color-bg--black">
									<ParagraphsContent />
								</div>
								<div className="col2 color-bg--grey">
									<ParagraphsContent />
								</div>
								<div className="col3 color-bg--white">
									<ParagraphsContent />
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
