import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Header from './components/Header' //一般组件
import Home from './pages/Home' //路由组件
import About from './pages/About' //路由组件

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header></Header>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生html,使用a标签进行跳转页面 */}
							{/* {<a className="list-group-item active" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a>} */}
							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<NavLink activeClassName ="is_active1" className="list-group-item " to="/home">home</NavLink>
							<NavLink activeClassName ="is_active2" className="list-group-item " to="/about">About</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">

								{/* 注册路由 */}
								<Route path="/home" component={Home} />
								<Route path="/about" component={About} />
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
