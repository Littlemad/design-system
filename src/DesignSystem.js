import React from "react";
import {BrowserRouter} from "react-router-dom";
import InjectRootCSS from "./components/elements/InjectRootCSS/InjectRootCSS";
import RoutesLayout from "./components/navigation/RoutesLayout";
import dataJSON from "./data/data.json";
import "./styles/main.scss";

const DesignSystem = () => {
	const colorsJSON = dataJSON.colors;
	const linkJSON = dataJSON.links;
	const typographyJSON = dataJSON.typography;
	return (
		<>
			<InjectRootCSS data={colorsJSON} varPrefix="--color-" />
			<InjectRootCSS data={linkJSON} varPrefix="--color-" />
			<InjectRootCSS data={typographyJSON} varPrefix="--type-" />

			<BrowserRouter>
				<RoutesLayout />
			</BrowserRouter>
		</>
	);
};

export default DesignSystem;
