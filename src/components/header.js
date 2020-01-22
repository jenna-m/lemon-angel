import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Header extends React.Component {
	render() {
		return (
			<div className="header-container">
				<nav>
					<NavLink to="#about" activeClassName="selected" smooth>
						About
					</NavLink>
					<NavLink to="#portfolio" activeClassName="selected" smooth>
						Portfolio
					</NavLink>
					<NavLink to="#contact" activeClassName="selected" smooth>
						Contact
					</NavLink>
				</nav>
			</div>
		);
	}
}

export default Header;
