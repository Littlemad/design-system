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
				<footer className="main-footer">
					<h1 className="main-footer__title h1">Experiments</h1>
					<ul className="list">
						<li className="list__li">
							<a href="https://v5.reactrouter.com/web/guides/quick-start">React Quick reference</a>
						</li>
						<li className="list__li">
							<a href="https://codesandbox.io/s/3d-dice-roll-using-three-js-forked-4bk62g?file=/src/index.js">
								Three-js with React
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
}

export default RoutesLayout;
