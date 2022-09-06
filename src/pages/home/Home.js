import React from "react";
import PropTypes from "prop-types";

import Icons from "./../../assets/svg/icons.svg";
import {ReactComponent as ReactLogo} from "./../../assets/svg/logo.svg";

import "./HomeLayout.scss";

const Icon = ({name, color, size}) => (
	<svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
		<use xlinkHref={`${Icons}#icon-${name}`} />
	</svg>
);

function Home() {
	return (
		<>
			<h1 class="h1">Typography</h1>
			<h1 class="h2">Typography</h1>
			<h1 class="h3">Typography</h1>
			<h1 class="h4">Typography</h1>
			<h1 class="h5">Typography</h1>
			<h1 class="h6">Typography</h1>
			<br />
			<br />
			<Icon name="arrow-down" color="#ff0000" size={35} />
			<ReactLogo />
			<p>
				test paragraph size
				<br />
				aksdkjasbjkdas
				<br />
				jkasdjasdj
				<br />
				asdkasd asdasd asd as
				<br />
			</p>
		</>
	);
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
};

export default Home;
