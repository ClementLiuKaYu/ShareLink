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
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal,
		});
	};

	render() {
		return (
			<div>
				<Button color="primary" onClick={this.toggle}>
					{this.props.buttonLabel}
				</Button>

				<Form onSubmit={this.props.addLinkFunc.addLink}>
					<Modal
						isOpen={this.state.modal}
						toggle={this.toggle}
						className={this.props.className}
					>
						<ModalHeader toggle={this.toggle}>Add Link</ModalHeader>

						<ModalBody>
							<FormGroup>
								<Label for="name">Link Name</Label>
								<Input
									type="name"
									name="name"
									id="name"
									placeholder="Link Name"
									onChange={this.props.addLinkFunc.inputChange}
								/>
							</FormGroup>

							<FormGroup>
								<Label for="tags">Tags</Label>
								<Input
									type="tags"
									name="tags"
									id="tag1"
									placeholder="Tag"
									onChange={this.props.addLinkFunc.inputChange}
								/>
							</FormGroup>

							<FormGroup>
								<Label for="url">Url</Label>
								<Input
									type="url"
									name="url"
									id="url"
									placeholder="Url"
									onChange={this.props.addLinkFunc.inputChange}
								/>
							</FormGroup>
						</ModalBody>

						<ModalFooter>
							<Button color="primary" type="submit" value="submit">
								Submit
							</Button>
							<Button color="danger" onClick={this.toggle}>
								Cancel
							</Button>
						</ModalFooter>
					</Modal>
				</Form>
			</div>
		);
	}
}
