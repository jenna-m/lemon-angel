import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
// Import components
import Header from './components/header';
import Landing from './components/landing';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Header />
					<Landing />
					<div id="gradient">
						<section id="about">
							<About />
						</section>
						<section id="portfolio">
							<Portfolio />
						</section>
						<section id="contact">
							<Contact />
						</section>
					</div>

					<div className="footer">
						© Elizabeth Garcia 2020 | Design by{' '}
						<a
							href="https://jennamichaels.dev"
							target="_blank"
							rel="noopener noreferrer"
						>
							Jenna Michaels
						</a>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
