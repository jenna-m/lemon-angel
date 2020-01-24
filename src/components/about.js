import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import aboutImg from '../images/aboutImg.jpg';

class About extends React.Component {
	render() {
		return (
			<div className="about-container">
				<div>
					<img
						className="section-img"
						id="about-img"
						src={aboutImg}
						alt="Elizabeth Garcia in a chef's uniform"
					/>
				</div>
				<div className="about-text">
					<div>
						<p>
							Elizabeth García, CCSF Alumna, is a pastry chef
							based in San Diego, CA.
						</p>
					</div>
					<div>
						<Link to="#portfolio" smooth className="about-btn">
							See her work
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
