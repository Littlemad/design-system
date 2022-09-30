import React from "react";
import {BrowserRouter} from "react-router-dom";
import InjectRootCSS from "./components/elements/InjectRootCSS/InjectRootCSS";
import RoutesLayout from "./components/navigation/RoutesLayout";
import "./styles/main.scss";

function DesignSystem() {
	return (
		<>
			<InjectRootCSS />
			<BrowserRouter>
				<RoutesLayout />
			</BrowserRouter>
		</>
	);
}

export default DesignSystem;
