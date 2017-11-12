import React , { Component } from 'react';
import axios from 'axios';

class SingleEvents extends Component {
	constructor(props) {
		super(props)
		this.state = {
			events: ''
		}
	}

	componentDidMount() {
		this._fetch()
	}

	_fetch() {
		const id = this.props.match.params.number
		const uri = 'https://crossorigin.me/http://ufc-data-api.ufc.com/api/v1/us/fighters/1177'
		const conf = {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		}
		axios.get(uri , conf)
			.then(res => {
				this.setState({events: res.data} , () => console.log(this.state))
				console.log(res.data)
			})
			.catch(err => console.log(err))
			console.log(this.props.player)
	}

  render() {
    return (
      <div>
        <h1>single</h1>
      </div>
    )
  }
}

export default SingleEvents