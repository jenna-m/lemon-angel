import React from 'react';
// import images
import img1 from '../images/portfolio/1.jpg';
import img2 from '../images/portfolio/2.jpg';
import img3 from '../images/portfolio/3.jpg';
import img4 from '../images/portfolio/4.jpg';
import img5 from '../images/portfolio/5.jpg';
import img6 from '../images/portfolio/6.jpg';
import img7 from '../images/portfolio/7.jpg';
import img8 from '../images/portfolio/8.jpg';
import img9 from '../images/portfolio/9.jpg';
import img10 from '../images/portfolio/10.jpg';
import img11 from '../images/portfolio/11.jpg';
import img12 from '../images/portfolio/12.jpg';

class Portfolio extends React.Component {
	render() {
		return (
			<div className="portfolio-container">
				<div className="portfolio-img-container">
					<img
						className="flex-item"
						src={img1}
						alt="Cakes Topped with Strawberries"
					/>
					<img
						className="flex-item"
						src={img2}
						alt="Squares of Tiramisu Cake"
					/>
					<img
						className="flex-item"
						src={img3}
						alt="Heart Shaped Poppyseed Cookies with Powdered Sugar"
					/>
					<img
						className="flex-item"
						src={img4}
						alt="Carrot Cakes with Crumble Topping"
					/>
					<img
						className="flex-item"
						src={img5}
						alt="Vanilla Parfait Topped with Fresh Raspberries"
					/>
					<img
						className="flex-item"
						src={img6}
						alt="Plate of Fig and Cheese Danishes"
					/>
					<img
						className="flex-item"
						src={img7}
						alt="Unbaked Single-Serving Sized Baked Alaskas"
					/>
					<img
						className="flex-item"
						src={img8}
						alt="Torched Meringue Swirl on Top of a Pie"
					/>
					<img
						className="flex-item"
						src={img9}
						alt="Chocolate Bundt Cake with Glossy Choclate and Sliced Almond Toppings"
					/>
					<img
						className="flex-item"
						src={img10}
						alt="Chocolate Cake with Cherries and Floral Decorations"
					/>
					<img
						className="flex-item"
						src={img11}
						alt="Cake with Edible Decorative Grass and Strawberries"
					/>
					<img
						className="flex-item"
						src={img12}
						alt="Cheesecake Brownies with Colorful Sprinkles"
					/>
				</div>
			</div>
		);
	}
}

export default Portfolio;
