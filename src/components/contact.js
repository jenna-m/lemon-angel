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
					<p>Get in touch:</p>
					<div id="contact-email">
						<a href="mailto:hello@lemonangel.net">
							hello@lemonangel.net
						</a>
					</div>
					<div id="contact-phone">
						<p>(xxx) xxx - xxxx</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
