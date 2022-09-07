import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "./Navigation";

import PageHome from "../../pages/home/Home";
import PageIcons from "../../pages/icons/Icons";
import PageTypography from "../../pages/typography/Typography";
import PageColors from "../../pages/colors/Colors";
import PageGridSystem from "../../pages/grid/GridSystem";

import "./RoutesLayout.scss";

function RoutesLayout() {
	return (
		<>
			<div className="page">
				<header class="main-header">
					<h1 class="main-header__title h1">Design System</h1>
				</header>
				<Navigation />
				<main className="main-content">
					<Routes>
						<Route path="/" element={<PageHome />} />
						<Route path="icons" element={<PageIcons />} />
						<Route path="typography" element={<PageTypography />} />
						<Route path="colors" element={<PageColors />} />
						<Route path="grid-system" element={<PageGridSystem />} />
					</Routes>
				</main>
			</div>
		</>
	);
}

export default RoutesLayout;
