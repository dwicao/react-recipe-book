import React, { Component, PropTypes } from 'react';
import {
	Modal,
	Button,
	FormGroup,
	FormControl,
	ControlLabel
} from 'react-bootstrap';

export default class ModalAddRecipe extends Component {
	constructor(props) {
		super(props);

		this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
		this.onChangeIngredients = this.onChangeIngredients.bind(this);
		this.addRecipe = this.addRecipe.bind(this);
	}

	onChangeRecipeName(event) {
		this.props.onChangeRecipeName(event.target.value);
	}

	onChangeIngredients(event) {
		this.props.onChangeIngredients(event.target.value);
	}

	addRecipe() {
		const tempName = this.props.tempName.length < 1 ? 'Untitled' : this.props.tempName;
		const tempIngredients = this.props.tempIngredients.split(',');
		
		this.props.recipeBook.push({
			recipeTitle: tempName,
			ingredients: tempIngredients
		});

		localStorage.setItem('recipeBook', JSON.stringify(this.props.recipeBook));

		this.props.clearTempName();
		this.props.clearTempIngredients();
		this.props.hideModal();
	}

	render() {
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.hideModal}
				dialogClassName="custom-modal"
			>
			  <Modal.Header closeButton>
	            <Modal.Title id="contained-modal-title-lg">Add a Recipe</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <form>
	            	<FormGroup>
	            		<ControlLabel>Recipe</ControlLabel>
				    	<FormControl onChange={this.onChangeRecipeName} type="text" placeholder="Recipe Name" />
				    </FormGroup>
				    <FormGroup>
	            		<ControlLabel>Ingredients</ControlLabel>
				    	<FormControl onChange={this.onChangeIngredients} style={{resize: 'vertical'}} componentClass="textarea" placeholder="Enter Ingredients,Separated,By Commas" />
				    </FormGroup>
	            </form>
	          </Modal.Body>
	          <Modal.Footer>
	          	<Button onClick={this.addRecipe} bsStyle="primary">Add Recipe</Button>
	            <Button onClick={this.props.hideModal}>Close</Button>
	          </Modal.Footer>
        	</Modal>
		);
	}
}

ModalAddRecipe.propTypes = {
	show: PropTypes.bool.isRequired,
	hideModal: PropTypes.func.isRequired,
	onChangeRecipeName: PropTypes.func.isRequired,
	onChangeIngredients: PropTypes.func.isRequired,
	clearTempName: PropTypes.func.isRequired,
	clearTempIngredients: PropTypes.func.isRequired,
	tempName: PropTypes.string.isRequired,
	tempIngredients: PropTypes.string.isRequired,
	recipeBook: PropTypes.array.isRequired
};