import React , {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './Home.css';
import Events from './Events';

class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			events : '',
			view: 10
		}
		this._loadMore = this._loadMore.bind(this)
	}

	_loadMore = () => {
		const { view } = this.state
		this.setState({
			view: ++ this.state.view
		} , () => console.log(this.state))
	}

	componentDidMount() {
		this._fetch()
	}

	_fetch = () => {
		console.log(this.props.player)
		const uri = 'https://crossorigin.me/http://ufc-data-api.ufc.com/api/v1/us/events'
		const conf = {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		}
		axios.get(uri , conf)
			.then(res => {
				this.props.dispatch({
					type: 'RECEIVE_EVENTS',
					payload: res.data
				})
				this.setState({events: res.data} , () => console.log(this.state))
				console.log(res.data)
			})
			.catch(err => this.props.dispatch({
				type: 'FETCH_EVENTS_ERROR',
				payload: err
			}))
			console.log(this.props.player)
	}

	render() {
		// const { events , view } = this.state
		const { events } = this.props.player
		return (
			<div className='home'>
				{events.length ? events.map((events , i) => {
					return (
						<Events events={events} />
					)
				}) : null }
			</div>
		)
	}
}

const stateToProps = state => {
	return {
		player: state.player
	}
}

export default connect(stateToProps)(Home)
