import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Library from './components/lib.component';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container col-xl-12">
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<a className="navbar-brand">
							<Link to="/" className="navbar-brand">
								<img className="logo-img"/>
								AMS Bands {' '}
								<span id="thin-text">
									Music Library
								</span>
							</Link>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarTogglerDemo02"
							aria-controls="navbarTogglerDemo02"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
						>
							<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Library
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/create"
										className="nav-link"
									>
										New Music
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to="/create"
										className="nav-link disabled"
									>
										Concert Planner
									</Link>
								</li>
							</ul>
						</div>
					</nav>

					<br />
					<Route path="/" exact component={Library} />
					<Route path="/edit/:id" component={Edit} />
					<Route path="/create" component={Create} />
				</div>
			</Router>
		);
	}
}

export default App;
