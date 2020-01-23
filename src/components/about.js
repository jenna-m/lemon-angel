import React from 'react';
import aboutImg from '../images/aboutImg.jpg';

class About extends React.Component {
	render() {
		return (
			<div className="about-container">
				<img
					className="section-img"
					id="about-img"
					src={aboutImg}
					alt="Elizabeth Garcia in a chef's uniform"
				/>
				<p>
					Elizabeth García, CCSF Alumna, is a pastry chef based in San
					Diego, CA.
				</p>
			</div>
		);
	}
}

export default About;
