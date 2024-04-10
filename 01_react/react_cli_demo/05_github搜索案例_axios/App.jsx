import React, { Component } from 'react'
import List from './components/List'
import Seach from './components/Seach'

export default class App extends Component {
	state = {
		isFirst:true,
		isLoading:false,
		err:'',
		users:[]
	}
	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}
	render() {
		return (
			<div className="container">
				<Seach updateAppState={this.updateAppState}></Seach>
				<List {...this.state} ></List>
			</div>
		)
	}
}
