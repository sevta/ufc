import React , { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import Navbar from './components/_partials/Navbar';
import NavBottom from './components/_partials/NavBottom';
import './Root.css';
import Home from './components/home/Home';
import SingleEvents from './components/home/SingleEvents';
import Player from './components/player/Player';
import Movie from './components/Movie/Movies';
import SingleMovie from './components/Movie/SingleMovie';

export default class Routers extends Component {
	render() {
		return (
			<div>
				<Navbar />
					<div className='root'>
						<Route exact path='/' component={Home} />
						<Route path='/player' component={Player} />
						<Route path='/event/:id' component={SingleEvents} />
						<Route path='/movie' component={Movie} />
						<Route path='/movies/:id' component={SingleMovie} />
					</div>
				<NavBottom />
			</div>
		)
	}
}
