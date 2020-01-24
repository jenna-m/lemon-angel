import React from 'react';
import classnames from 'classnames';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			prevScrollPosition: window.pageYOffset,
			visible: true
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	// method to hide/show navbar on scroll down/up
	handleScroll = () => {
		const { prevScrollPosition } = this.state;

		const currentScrollPosition = window.pageYOffset;
		const visible = prevScrollPosition > currentScrollPosition;

		this.setState({
			prevScrollPosition: currentScrollPosition,
			visible
		});
	};

	render() {
		return (
			<div className="header-container">
				<nav
					className={classnames('navbar', {
						'navbar--hidden': !this.state.visible
					})}
				>
					{' '}
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
