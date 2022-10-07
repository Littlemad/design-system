import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
	const myClass = ({isActive}) => "main-nav__link" + (isActive ? " main-nav--active" : "");

	return (
		<nav className="main-nav">
			<ul className="main-nav__ul">
				<li className="main-nav__li">
					<NavLink className={myClass} to="/">
						Home
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink className={myClass} to="/colors">
						Colors
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink className={myClass} to="/grid-system">
						Grid System
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink className={myClass} to="/icons">
						Icons
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink className={myClass} to="/typography">
						Typography
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
