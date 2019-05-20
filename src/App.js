import React, { Component } from 'react'

export default class App extends Component {

	state = {
		people: []
	};

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
			.then(r => r.json())
			.then(data => this.setState({people: data.people}))
	}

	render() {
		return (
			<div>
				
			</div>
		);
	}
}
