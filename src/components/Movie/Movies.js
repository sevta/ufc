import React , { Component } from 'react';
import { config } from '../../config';
import './Movies.css';
import axios from 'axios';
import ListMovie from './ListMovie';
import Spinner from 'react-spinkit';
import SwipeableViews from 'react-swipeable-views';

class Movie extends Component {
	constructor(props){
		super(props)
		this.state = {
			discover: '',
			fetch: false,
			fetched: false,
			sort: 'popularity.desc',
			index: 0
		}
		this._sort = this._sort.bind(this)
		this._onChangeIndex = this._onChangeIndex.bind(this)
		this._handleTab = this._handleTab.bind(this)
	}

	_handleTab = () => {
		this.setState({
			index: 0
		})
	}

	_sort = e => {
		this.setState({
			sort: e.target.value
		} , () => this._fetch())
	}

	componentDidMount() {
		this._fetch()
	}

	_onChangeIndex = index => {
		this.setState({
			index,
		} , () => console.log(this.state.index))
	}

	_fetch = () => {
		const { sort } = this.state
		this.setState({ fetch: true , fetched: false })
		const api = `https://api.themoviedb.org/3/discover/movie?api_key=${config.apikey}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1`
		axios.get(api)
			.then(res => {
				this.setState({discover: res.data , fetched: true , fetch: false}, () => console.log(this.state))
			})
			.catch(err => console.log(err))
	}

	render() {
		const { discover , fetch , fetched , index } = this.state
		const result = discover.results
		return (
			<div>
				<SwipeableViews index={index} onChangeIndex={this._onChangeIndex}>
					<div>
					<h1 style={{marginLeft: 12}}>Popular</h1>
						<div className="form-group">
							<select name="" id="" className="form-control form-m" onChange={this._sort}>
								<option value="popularity.desc">Popular</option>
								<option value="vote_count.desc">Vote</option>
								<option value="release_date.desc">Up Comming</option>
							</select>
						</div>
						<div className="movieContainer">
							{ fetched ? discover.results.map((o,i) => {
								const poster = `https://image.tmdb.org/t/p/w500${o.poster_path}`
								const not_pic = o.poster_path === null ? (<h1>gada gambar</h1>) : null
								return (
									<ListMovie movie={o} poster={poster} not_pic={not_pic} />
								)
							}) : <Spinner name="rotating-plane" color="blue"/> }
						</div>
					</div>
				</SwipeableViews>
	
			</div>
		)
	}
}

export default Movie