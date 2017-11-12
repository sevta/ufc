import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';

export default class Navbar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			toggle: false
		}
		this._toggle = this._toggle.bind(this)
	}

	click = e => {
		if (!ReactDOM.findDOMNode(this).contains(e.target) && this.state.toggle === true) {
			this.setState({ toggle: !this.state.toggle })
		}
	}

	componentDidMount() {
		document.addEventListener('click' , this.click , false)
	}

	componentWillUnmount() {
		document.removeEventListener('click' , this.click , false)
	}

	_toggle() {
		const { toggle } = this.state
		this.setState({
			toggle: !toggle
		} , () => console.log(this.state))
	}

	render() {
		const { toggle } = this.state
		return (
			<div className='navbar-u'>
				<div className={toggle ? "burger-menu active" : "burger-menu"} onClick={this._toggle}>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
				<div className="title-u">Movies</div>
				<div className={toggle ? "menu-u active" : "menu-u"} onClick={this._toggle}>
				</div>
			</div>
		)
	}
}
