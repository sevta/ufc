import React , { Component } from 'react';
import axios from 'axios';
import { config } from '../../config';
import './Movies.css';

class SingleMovie extends Component {
	constructor(props) {
		super(props)
		this.state = {
			single_movie: ''
		}
	}

	componentDidMount() {
		this._fetch()
	}

	_fetch = () => {
		const id = this.props.match.params.id
		const uri = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.apikey}&language=en-US`
		axios.get(uri)
			.then(res => {
				this.setState({single_movie: res.data})
				console.log(this.state.single_movie)
			})
			.catch(err => console.log(err))
	}

	render() {
		const { single_movie } = this.state
		const backdrop = `https://image.tmdb.org/t/p/w500${single_movie.backdrop_path}`
		return (
			<div className='single_movie'>
				<div className="backdrop">
					<div className="title-s">{single_movie.original_title}</div>
					{single_movie.backdrop_path === null ? (
						<img src='https://vignette.wikia.nocookie.net/obscure/images/7/76/Unknown-person.png/revision/latest?cb=20170102105750' alt=""/>
					) : (
						<img src={backdrop} alt=""/>
					)}
				</div>
				<div className="info">
					<div className="details-s">
						<div className="date-s">{single_movie.release_date}</div>
						<div className="runtime-s">{single_movie.runtime} min</div>
					</div>
					<div className="genre-s">
						{single_movie.genres ? single_movie.genres.map((genre , i) => {
							return (
								<div className="genre">{genre.name}</div>
							)
						}) : null}
					</div>
					<div className="genre-s">
					</div>
					<div className="overview-s">{single_movie.overview}</div>
					<div className="poster-s">
						<img src="" alt=""/>
					</div>
				</div>
			</div>
		)
	}
}

export default SingleMovie