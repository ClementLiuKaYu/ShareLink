import React, { Component } from 'react';
import AddLink from './AddLink';
import './LeftNav.css';

export default class LeftNav extends Component {
	render() {
		return (
			<div className="leftNav">
				<div>
					<h3>Salty Cactus</h3>
					<h4>{this.props.fav} fav. links</h4>
					<h4>{this.props.shared} shared links</h4>
					<AddLink buttonLabel="Add Link" addLink={this.props.addLink} />
				</div>
			</div>
		);
	}
}
