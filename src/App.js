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
					<header role="banner">
						<Header />
					</header>
					<main role="main">
						<Landing />
						<div id="gradient">
							<section id="about">
								<About />
							</section>
							<div className="separator"></div>
							<section id="portfolio">
								<Portfolio />
							</section>
							<div className="separator"></div>
							<section id="contact">
								<Contact />
							</section>
						</div>
					</main>

					<footer role="contentinfo">
						<p>© Elizabeth García 2020</p>
						<p>
							Design & Development by{' '}
							<a
								href="https://jennamichaels.dev"
								target="_blank"
								rel="noopener noreferrer"
							>
								Jenna Michaels
							</a>
						</p>
					</footer>
				</div>
			</Router>
		);
	}
}

export default App;
