import React, { Component } from 'react';
import './LeftNav.css';

export default class LeftNav extends Component {
	render() {
		return (
			<div className="leftNav">
				<div>
					<h3>Salty Cactus</h3>
					<h4>{this.props.fav} fav. links</h4>
					<h4>{this.props.shared} shared links</h4>
					<button className="btn btn-primary">Add Link</button>
				</div>
			</div>
		);
	}
}
