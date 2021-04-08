import React, { Component } from 'react';
import LinkBox from './LinkBox';
import './Main.css';

export default class Main extends Component {
	state = {
		search: '',
	};

	updateSearchBox = (e) => {
		this.setState({ search: e.target.value });
	};

	render() {
		return (
			<div className="main">
				<h2>Links for React</h2>
				<input
					type="text"
					placeholder="Search"
					value={this.state.search}
					onChange={(e) => {
						this.updateSearchBox(e);
						this.props.search(e.target.value);
					}}
				/>
				<div className="linksContainer">
					{this.props.shownList.map((link) => (
						<LinkBox
							key={link.id}
							tags={link.tags}
							url={link.url}
							name={link.name}
						/>
					))}
				</div>
			</div>
		);
	}
}
