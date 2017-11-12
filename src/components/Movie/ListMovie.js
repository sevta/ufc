import React , { Component } from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';

export default class ListMovie extends Component {
	render() {
		const movieid = `/movies/${this.props.movie.id}`
		return (
			<div className="movie">
				<Link to={movieid}>
					<img src={this.props.poster} alt=""/>
					<div className="details">
						<p className="title">{this.props.movie.title}</p>
						<p className="rate">IMDB {this.props.movie.vote_average}</p>
					</div>
				</Link>
			</div>
		)
	}
}