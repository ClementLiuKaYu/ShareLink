import React, { Component } from 'react';
import './LinkBox.css';

export default class LinkBox extends Component {
	render() {
		return (
			<div className="linkBox">
				<a href={this.props.url} target="_blank" rel="noreferrer">
					{this.props.name}
				</a>
				<br />
				<h6>Tags:</h6>
				{this.props.tags.map((tag, index) => (
					<span key={index} className="badge badge-primary">
						{tag}
					</span>
				))}
			</div>
		);
	}
}
