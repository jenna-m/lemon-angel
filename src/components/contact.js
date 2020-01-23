import React from 'react';
import contactImg from '../images/contactImg.jpg';

class Contact extends React.Component {
	render() {
		return (
			<div className="contact-container">
				<div>
					<img
						className="section-img"
						id="contact-img"
						src={contactImg}
						alt="Elizabeth forming dough into loaves"
					/>
				</div>
				<div>
					<p>hello@lemonangel.net</p>
				</div>
			</div>
		);
	}
}

export default Contact;
