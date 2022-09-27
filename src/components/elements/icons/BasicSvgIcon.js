import React from "react";
import PropTypes from "prop-types";
import IconPath from "../../../assets/svg/icons.svg";

const BasicSvgIcon = ({name, size, label}) => (
	<svg className={`icon icon-${name} icon--size-${size}`} role="img" aria-label={label}>
		<use xlinkHref={`${IconPath}#${name}`} />
	</svg>
);

BasicSvgIcon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string.isRequired,
};

export default BasicSvgIcon;
