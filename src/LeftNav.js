import React, { Component } from 'react';
import './LeftNav.css';

export default class LeftNav extends Component {
	render() {
		return (
			<div className="leftNav">
				<div>
					<h2>Salty Cactus</h2>
					<h3>{this.props.fav} fav. links</h3>
					<h3>{this.props.shared} shared links</h3>
					<button className="btn btn-primary">Add Link</button>
				</div>
			</div>
		);
	}
}
