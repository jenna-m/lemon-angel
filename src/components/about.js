import React from 'react';
import aboutImg from '../images/aboutImg.jpg';

class About extends React.Component {
	render() {
		return (
			<div className="about-container">
				<div className="section-title">
					<h1>About</h1>
				</div>
				<div className="section-content">
					<img
						className="section-img"
						id="about-img"
						src={aboutImg}
						alt="Elizabeth Garcia in a chef's uniform"
					/>
					<p>
						Elizabeth García, CCSF Alumna, is a pastry chef based in
						San Diego, CA.
					</p>
				</div>
			</div>
		);
	}
}

export default About;
