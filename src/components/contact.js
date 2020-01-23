import React from 'react';
import contactImg from '../images/contactImg.jpg';

class Contact extends React.Component {
	render() {
		return (
			<div className="contact-container">
				<div className="section-title">
					<h1>Contact</h1>
				</div>
				<div className="section-content">
					<img
						className="section-img"
						id="contact-img"
						src={contactImg}
						alt="Elizabeth forming dough into loaves"
					/>
					<p>hello@lemonangel.net</p>
				</div>
			</div>
		);
	}
}

export default Contact;
