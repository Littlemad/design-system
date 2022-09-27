import React from "react";
import PropTypes from "prop-types";
import dataJSON from "../../../data/data.json";
// import BasicSvgIcon from "./BasicSvgIcon";
import IconPath from "../../../assets/svg/icons.svg";

const iconsJSON = dataJSON.icons;

const SvgIcon = (iconName, size) => {
	const myIcon = iconsJSON.find((e) => e.name === iconName);

	return (
		<>
			<svg
				className={`icon icon-${myIcon.name} icon--size-${size}`}
				role="img"
				aria-label={myIcon.desc}
				key={myIcon.name}
			>
				<use xlinkHref={`${IconPath}#${myIcon.name}`} />
			</svg>
		</>
	);
};

SvgIcon.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
};

export default SvgIcon;
