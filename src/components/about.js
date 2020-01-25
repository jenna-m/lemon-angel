import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import aboutImg from '../images/aboutImg.jpg';

class About extends React.Component {
	render() {
		return (
			<div className="about-container">
				<h1 className="accessible-header">About</h1>
				<div>
					<img
						className="section-img"
						id="about-img"
						src={aboutImg}
						alt="Elizabeth Garcia in a chef's uniform"
					/>
				</div>
				<div id="about-text">
					<div>
						<p>
							Elizabeth García, CCSF Baking & Pastry Program
							Alumna, is a patissier based in San Diego, CA.
							<br />
							Lemon Angel is her way of sharing her passion and
							talent with you.
						</p>
					</div>
					<div>
						<Link to="#portfolio" smooth className="about-btn">
							view her work
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
