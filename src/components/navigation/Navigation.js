import * as React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
	return (
		<nav className="main-nav">
			<ul className="main-nav__ul">
				<li className="main-nav__li">
					<NavLink
						className={({isActive}) => "main-nav__link" + (isActive ? " main-nav--active" : "")}
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink
						className={({isActive}) => "main-nav__link" + (isActive ? " main-nav--active" : "")}
						to="/icons"
					>
						Icons
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink
						className={({isActive}) => "main-nav__link" + (isActive ? " main-nav--active" : "")}
						to="/typography"
					>
						Typography
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
