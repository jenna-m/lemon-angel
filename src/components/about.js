import React from 'react';
import aboutImg from '../images/aboutImg.jpg';

class About extends React.Component {
	render() {
		return (
			<div className="about-container">
				<h1>About</h1>
				<img
					src={aboutImg}
					alt="Elizabeth Garcia in a chef's uniform"
				/>
				<p>
					Elizabeth García, <span>CCSF Alumna</span>, is a{' '}
					<span>pastry chef</span> currently located in{' '}
					<span>San Diego, CA</span>.
				</p>
			</div>
		);
	}
}

export default About;
