import React , { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import Navbar from './components/_partials/Navbar';
import NavBottom from './components/_partials/NavBottom';
import './Root.css';
import Home from './components/home/Home';
import Player from './components/player/Player';

export default class Routers extends Component {
	render() {
		return (
			<div>
				<Navbar />
					<div className='root'>
						<Route exact path='/' component={Home} />
						<Route path='/player' component={Player} />
					</div>
				<NavBottom />
			</div>
		)
	}
}
