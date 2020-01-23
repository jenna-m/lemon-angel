import React from 'react';
// import images
import img1 from '../images/landing/1.jpg';
import img2 from '../images/landing/2.jpg';
import img3 from '../images/landing/3.jpg';
import img4 from '../images/landing/4.jpg';
import img5 from '../images/landing/5.jpg';

class Portfolio extends React.Component {
	render() {
		return (
			<div className="portfolio-container">
				<div className="portfolio-img-container">
					<img src={img1} alt="Carrot Cakes" />
					<img
						src={img2}
						alt="Chocolate Cake with Floral Decoration"
					/>
					<img
						src={img3}
						alt="Strawberry on Top of Decorated Cupcake"
					/>
					<img
						src={img4}
						alt="Cake with Edible Decorative Grass and Strawberries"
					/>
					<img
						src={img5}
						alt="Cheesecake Brownies with Colorful Sprinkles"
					/>
				</div>
			</div>
		);
	}
}

export default Portfolio;
