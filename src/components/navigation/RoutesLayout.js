import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "./Navigation";

import PageHome from "../../pages/home/Home";
import PageIcons from "../../pages/icons/Icons";
import PageTypography from "../../pages/typography/Typography";

import "./RoutesLayout.scss";

function RoutesLayout() {
	return (
		<>
			<div className="page">
				<header class="main-header">
					<h1 class="h1">Design System</h1>
				</header>
				<main className="main-content">
					<Navigation />

					<Routes>
						<Route path="/" element={<PageHome />} />
						<Route path="icons" element={<PageIcons />} />
						<Route path="typography" element={<PageTypography />} />
					</Routes>
				</main>
			</div>
		</>
	);
}

export default RoutesLayout;
