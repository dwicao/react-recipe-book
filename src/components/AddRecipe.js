import React, { Component } from 'react';
import ModalAddRecipe from './ModalAddRecipe';
import { Button } from 'react-bootstrap';

export default class AddRecipe extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false
		};

		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	showModal() {
	    this.setState({show: true});
	}

	hideModal() {
	    this.setState({show: false});
	}

	render() {
		return (
			<div>
				<ModalAddRecipe 
					show={this.state.show}
					hideModal={this.hideModal}
				/>
				<Button bsStyle="primary" onClick={this.showModal}>
					Add Recipe
				</Button>
			</div>
		);
	}
}