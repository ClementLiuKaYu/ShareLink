import React, { Component } from 'react';

import {
	Button,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';

export default class AddLink extends Component {
	state = {
		modal: false,
		addLinkInput: {
			name: '',
			tags: [''],
			url: '',
		},
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal,
		});
	};

	inputChange = (event) => {
		let updateInput = { ...this.state.addLinkInput };
		switch (event.target.name) {
			case 'tags':
				updateInput['tags'][event.target.id] = event.target.value;
				this.setState({
					addLinkInput: updateInput,
				});
				break;
			default:
				updateInput[event.target.name] = event.target.value;
				this.setState({
					addLinkInput: updateInput,
				});
				break;
		}
	};

	addTagBox = () => {
		let updateInput = { ...this.state.addLinkInput };
		updateInput['tags'].push('');
		this.setState({
			addLinkInput: updateInput,
		});
	};

	deleteTagBox = () => {
		let updateInput = { ...this.state.addLinkInput };
		updateInput['tags'].pop();
		this.setState({
			addLinkInput: updateInput,
		});
	};

	addLink = (event) => {
		event.preventDefault();
		this.props.addLink(this.state.addLinkInput);
		this.setState({
			addLinkInput: {
				name: '',
				tags: [''],
				url: '',
			},
		});
		this.toggle();
	};

	render() {
		return (
			<div>
				<Button color="primary" onClick={this.toggle}>
					{this.props.buttonLabel}
				</Button>

				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<Form onSubmit={this.addLink}>
						<ModalHeader toggle={this.toggle}>Add Link</ModalHeader>

						<ModalBody>
							<FormGroup>
								<Label for="name">Link Name</Label>
								<Input
									type="name"
									name="name"
									id="name"
									placeholder="Link Name"
									onChange={this.inputChange}
								/>
							</FormGroup>

							<FormGroup>
								<Label for="url">Url</Label>
								<Input
									type="url"
									name="url"
									id="url"
									placeholder="Url"
									onChange={this.inputChange}
								/>
							</FormGroup>

							<FormGroup>
								<Label for="tags">Tags</Label>
								{this.state.addLinkInput.tags.map((tag, index) => {
									return (
										<Input
											key={index}
											type="tags"
											name="tags"
											id={index}
											placeholder={`Tag ${index + 1}`}
											value={tag}
											style={{ marginTop: 3 }}
											onChange={this.inputChange}
										/>
									);
								})}
							</FormGroup>
							<Button
								color="primary"
								style={{ marginRight: 5 }}
								disabled={this.state.addLinkInput.tags.length >= 3}
								onClick={this.addTagBox}
							>
								Add Tag
							</Button>
							<Button
								color="danger"
								onClick={this.deleteTagBox}
								disabled={this.state.addLinkInput.tags.length <= 1}
							>
								Delete Tag
							</Button>
						</ModalBody>

						<ModalFooter>
							<Button color="primary" type="submit" value="submit">
								Submit
							</Button>
							<Button color="danger" onClick={this.toggle}>
								Cancel
							</Button>
						</ModalFooter>
					</Form>
				</Modal>
			</div>
		);
	}
}
