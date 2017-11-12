import React , { Component } from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';

export default class ListMovie extends Component {
	componentDidMount() {
		console.log(this.props.poster)
	}
	render() {
		const movieid = `/movies/${this.props.movie.id}`
		const poster = `https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`
		return (
			<div className="movie">
				<Link to={movieid}>
					{this.props.movie.poster_path === null ? (
						<img src="https://vignette.wikia.nocookie.net/obscure/images/7/76/Unknown-person.png/revision/latest?cb=20170102105750" alt=""/>
					) : (
						<img src={poster} alt=""/>
					)}
					<div className="details">
						<p className="title">{this.props.movie.title}</p>
						<p className="rate">IMDB {this.props.movie.vote_average}</p>
					</div>
				</Link>
			</div>
		)
	}
}