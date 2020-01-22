import React from 'react';
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
			<div className="container">
				<Header />
				<Landing />
				<About />
				<Portfolio />
				<Contact />
				<div className="footer">
					© Elizabeth Garcia 2020 | Web Design by{' '}
					<a
						href="https://jennamichaels.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jenna Michaels
					</a>
				</div>
			</div>
		);
	}
}

export default App;
