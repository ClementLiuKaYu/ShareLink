import React, { Component } from 'react';
import LinkBox from './LinkBox';
import './Main.css';

export default class Main extends Component {
	render() {
		return (
			<div className="main">
				<h2>Links for React</h2>
				<input type="text" placeholder="Search" />
				<div className="linksContainer">
					{this.props.linkList.map((link) => (
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
