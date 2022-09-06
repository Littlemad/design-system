import * as React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
	return (
		<nav className="main-nav">
			<ul className="main-nav__ul">
				<li className="main-nav__li">
					<NavLink activeClassName="active" to="/">
						Home
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink activeClassName="active" to="/icons">
						Icons
					</NavLink>
				</li>
				<li className="main-nav__li" activeClassName="active">
					<NavLink to="/typography">Typography</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
