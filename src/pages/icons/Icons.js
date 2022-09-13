import React from "react";
import PropTypes from "prop-types";
import dataJSON from "../../data/data.json";
import Highlighter from "../../components/highlighter/Highlighter";

import IconPath from "./../../assets/svg/icons.svg";
// import {ReactComponent as ReactLogo} from "./../../assets/svg/logo.svg";

import "./IconsLayout.scss";

const iconsJSON = dataJSON.icons;

const IconList = () => {
	return iconsJSON.map((icons) => (
		<svg className={`icon icon-${icons.name}`} key={icons.name}>
			<use xlinkHref={`${IconPath}#${icons.name}`} />
		</svg>
	));
};

const Icon = ({name, color, size}) => (
	<svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
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

const CodeA3 = `<Icon name="home" color="#ff0000" size={35} />`;

const Icons = () => {
	return (
		<>
			<div className="box-icons">
				<h2 className="h2 bold box-icons__title">Loading icons in React</h2>
				*description*
				<div className="box box-single-icon">
					<h3 className="h2 bold box__title">Single icon from SVG Spriting</h3>
					<Icon name="home" color="#ff0000" size={35} />
					CodeImport
					<Highlighter code={CodeImport} language="js" />
					SVG Symbol
					<Highlighter code={CodeA1} language="markup" />
					Function Component
					<Highlighter code={CodeA2} language="js" />
					Component
					<Highlighter code={CodeA3} language="js" />
				</div>
				<div className="box box-icon-list">
					<h3 className="h2 bold box__title">Entire list</h3>
					<IconList />
				</div>
			</div>
		</>
	);
};

// 			<ReactLogo />

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
};

export default Icons;
