import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftNav from './LeftNav';
import Main from './Main';

export default class App extends Component {
	state = {
		linkList: [
			{
				id: 1,
				name: 'Google',
				url: 'https://www.google.com',
				tags: ['Hi', 'Gooooogle', 'Yahooooo'],
			},
			{
				id: 2,
				name: 'Fox News',
				url: 'https://www.fox.com',
				tags: ['Biased', 'News', 'Stop showing me Korean news'],
			},
		],
	};

	render() {
		return (
			<div className="app">
				<LeftNav
					fav={this.state.linkList.length}
					shared={this.state.linkList.length - 1}
				/>
				<Main linkList={this.state.linkList} />
			</div>
		);
	}
}
