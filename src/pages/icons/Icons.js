import React from "react";
import PropTypes from "prop-types";
import dataJSON from "../../data/data.json";
import Highlighter from "../../components/highlighter/Highlighter";

import IconPath from "./../../assets/svg/icons.svg";

import "./IconsLayout.scss";

const iconsJSON = dataJSON.icons;

const IconList = () => {
	return (
		<ul className="box-iconlist">
			{iconsJSON.map((icons) => (
				<>
					<li className="box-iconlist_li">
						<h4 className="h4 box-iconlist_label">{icons.name}</h4>
						<svg
							className={`icon icon-${icons.name} icon--size-l`}
							role="img"
							aria-label={icons.desc}
							key={icons.name}
						>
							<use xlinkHref={`${IconPath}#${icons.name}`} />
						</svg>
					</li>
				</>
			))}
		</ul>
	);
};

const Icon = ({name, size, label}) => (
	<svg className={`icon icon-${name} icon--size-${size}`} role="img" aria-label={label}>
		<use xlinkHref={`${IconPath}#${name}`} />
	</svg>
);

const CodeImport = `{
	"icons": [
		{"name": "arrow"},
		{"name": "home"},
		{"name": "pencil"},
	]
}
`;

const CodeA1 = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
	<symbol id="home" viewBox="0 0 32 32">
		<path d="M32 18.451 16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"/>
	</symbol>
	<symbol id="checkmark" viewBox="0 0 32 32"><path d="M27 4 12 19l-7-7-5 5 12 12L32 9z"/></symbol>
</svg>`;

const CodeA2 = `const iconsJSON = dataJSON.icons; // include of icon listing

const Icon = ({name, color, size}) => (
	return iconsJSON.map((icons) => (
		<svg className={\`icon icon-\${icons.name}\`} key={icons.name}>
			<use xlinkHref={\`\${IconPath}#\${name}\`} />
		</svg>
	);
};
`;

const CodeA3 = `<Icon name="home" size="s" label="Home symbol" />`;

const Icons = () => {
	return (
		<>
			<div className="box-icons">
				<h2 className="h2 bold box-icons__title">Icons system with SVG sprites</h2>
				<p>
					Image sprites have been a good-practice technique for many years. If you require a number
					of regularly used graphics, you place them in a single image rather than individual files.
				</p>
				<p>
					The most common technique is to define individual images within an SVG &lt;symbol&gt;.
					Here a code example on how to use it inside React:
				</p>

				<div className="box box-single-icon">
					<h3 className="h2 bold box__title">Loading a single icon from SVG sprite</h3>
					<p>Create a JSON with your icon list of names matching the symbol id name</p>
					<Highlighter code={CodeImport} language="js" />
					<br />
					Have an SVG like this example filled with SVG Symbol all of the same viewbox size
					<Highlighter code={CodeA1} language="markup" />
					<br />
					Create a Component
					<Highlighter code={CodeA2} language="js" />
					<br />
					Insert a Component in your code
					<Highlighter code={CodeA3} language="js" />
					<br />
					Icon example
					<br />
					<Icon name="home" size="l" label="Home symbol" />
				</div>
				<div className="box box-icon-list">
					<h3 className="h2 bold box__title">Icons list</h3>
					<p className="spacing">
						Use the name of the icon as lowercase text for naming your svg icon
					</p>

					<IconList />
				</div>
				<div className="box box-icon-size">
					<h3 className="h2 bold box__title">Icons size</h3>
				</div>
			</div>
		</>
	);
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
};

export default Icons;
