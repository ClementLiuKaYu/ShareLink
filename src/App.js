import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftNav from './LeftNav';
import Main from './Main';

export default class App extends Component {
	state = {
		linkList: JSON.parse(localStorage.getItem('linkList')),
		shownList: JSON.parse(localStorage.getItem('linkList')),
	};

	addLink = (linkProps) => {
		let newList = [...this.state.linkList];
		newList.push({ id: this.state.linkList.length + 1, ...linkProps });
		localStorage.setItem('linkList', JSON.stringify(newList));
		this.setState({
			linkList: newList,
		});
	};

	search = (text) => {
		let newList = [...this.state.linkList].filter((link) => {
			return [link.name, ...link.tags]
				.map((word) => {
					return word.toLowerCase();
				})
				.some((tag) => {
					return tag.includes(text);
				});
		});

		this.setState({ shownList: newList });
	};

	render() {
		return (
			<div className="app">
				<LeftNav
					fav={this.state.linkList.length}
					shared={this.state.linkList.length}
					addLink={this.addLink}
				/>
				<Main shownList={this.state.shownList} search={this.search} />
			</div>
		);
	}
}
