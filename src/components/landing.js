import React from 'react';
import logo from '../images/logo/logo.svg';

class Landing extends React.Component {
	render() {
		return (
			<div className="landing-container">
				<img src={logo} alt="Lemon Angel Logo" />
			</div>
		);
	}
}

export default Landing;
