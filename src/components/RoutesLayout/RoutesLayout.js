import React from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "components/Navigation/Navigation";

import PageHome from "pages/PageHome/PageHome";
import PageIcons from "pages/PageIcons/PageIcons";
import PageTypography from "pages/PageTypography/PageTypography";
import PageColors from "pages/PageColors/PageColors";
import PageGridSystem from "pages/PageGridSystem/PageGridSystem";

import "./RoutesLayout.scss";

function RoutesLayout() {
	return (
		<>
			<div className="page">
				<header className="main-header">
					<h1 className="main-header__title h1">Design System</h1>
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
