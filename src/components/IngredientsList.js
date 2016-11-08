import React, { Component } from 'react';
import ModalEditRecipe from './ModalEditRecipe';
import {
	ListGroup,
	ListGroupItem,
	Button
} from 'react-bootstrap';

export default class IngredientsList extends Component {
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
				<ModalEditRecipe
					show={this.state.show}
					hideModal={this.hideModal}
				/>
				<h4 className="text-center">Ingredients</h4>
				<hr />
				<ListGroup>
					<ListGroupItem>Ayam</ListGroupItem>
					<ListGroupItem>Tepung</ListGroupItem>
					<ListGroupItem>Garam</ListGroupItem>
				</ListGroup>
				<Button bsStyle="danger">Delete</Button>
				<Button onClick={this.showModal} style={{marginLeft: 10}}>
					Edit
				</Button>
			</div>
		);
	}
}