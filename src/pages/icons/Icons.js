import React from "react";
import PropTypes from "prop-types";

import IconPath from "./../../assets/svg/icons.svg";
import {ReactComponent as ReactLogo} from "./../../assets/svg/logo.svg";

import "./IconsLayout.scss";

const Icon = ({name, color, size}) => (
	<svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
		<use xlinkHref={`${IconPath}#icon-${name}`} />
	</svg>
);

function Icons() {
	return (
		<>
			Page Icons
			<Icon name="arrow-down" color="#ff0000" size={35} />
			<ReactLogo />
		</>
	);
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
};

export default Icons;
