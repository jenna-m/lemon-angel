import React from 'react';
import contactImg from '../images/contactImg.jpg';

class Contact extends React.Component {
	render() {
		return (
			<div className="contact-container">
				<h1 className="accessible-header">Contact</h1>
				<div>
					<img
						className="section-img"
						id="contact-img"
						src={contactImg}
						alt="Elizabeth forming dough into loaves"
					/>
				</div>
				<div id="contact-text">
					<p>For all inquiries</p>
					<div id="contact-phone">
						<p>(123) 456-7890</p>
					</div>
					<div id="contact-email">
						<a href="mailto:hello@lemonangel.net">
							hello@lemonangel.net
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
