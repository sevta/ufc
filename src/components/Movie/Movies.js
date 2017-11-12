import React , { Component } from 'react';
import { config } from '../../config';
import './Movies.css';
import axios from 'axios';
import ListMovie from './ListMovie';
import Spinner from 'react-spinkit';

class Movie extends Component {
	constructor(props){
		super(props)
		this.state = {
			discover: '',
			fetch: false,
			fetched: false,
			sort: 'desc'
		}
		this._sort = this._sort.bind(this)
	}

	_sort = e => {
		this.setState({
			sort: e.target.value
		} , () => this._fetch())
	}

	componentDidMount() {
		console.log(config.apikey)
		this._fetch()
	}

	_fetch = () => {
		const { sort } = this.state
		this.setState({ fetch: true , fetched: false })
		const api = `https://api.themoviedb.org/3/discover/movie?api_key=${config.apikey}&language=en-US&sort_by=popularity.${sort}&include_adult=false&include_video=false&page=1`
		axios.get(api)
			.then(res => {
				this.setState({discover: res.data , fetched: true , fetch: false}, () => console.log(this.state))
			})
			.catch(err => console.log(err))
	}

	render() {
		const { discover , fetch , fetched } = this.state
		const result = discover.results
		return (
			<div>
				<div className="form-group">
					<select name="" id="" className="form-control form-m" onChange={this._sort}>
						<option value="desc">desc</option>
						<option value="acs">acs</option>
					</select>
				</div>
				<h1 style={{marginLeft: 10}}>discover</h1>
				<div className="movieContainer">
					{ fetched ? discover.results.map((o,i) => {
						const poster = `https://image.tmdb.org/t/p/w500${o.poster_path}`
						return (
							<ListMovie movie={o} poster={poster} />
						)
					}) : <Spinner name="rotating-plane" color="blue"/> }
				</div>
			</div>
		)
	}
}

export default Movie