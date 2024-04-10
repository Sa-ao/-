import React, { Component } from 'react'
import List from './components/List'
import Seach from './components/Seach'

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Seach></Seach>
				<List></List>
			</div>
		)
	}
}
