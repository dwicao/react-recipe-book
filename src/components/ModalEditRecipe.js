import React, { Component, PropTypes } from 'react';
import {
	Modal,
	Button,
	FormGroup,
	FormControl,
	ControlLabel
} from 'react-bootstrap';

export default class ModalEditRecipe extends Component {
	constructor(props) {
		super(props);

		this.displayRecipeName = this.displayRecipeName.bind(this);
		this.displayIngredients = this.displayIngredients.bind(this);
		this.editRecipe = this.editRecipe.bind(this);
	}

	displayRecipeName(event) {
		this.props.onChangeRecipeName(event.target.value);
	}

	displayIngredients(event) {
		this.props.onChangeIngredients(event.target.value);
	}

	editRecipe() {
		const index = this.props.id;
		const tempIngredients = this.props.tempIngredients;
		const storageIngredients = this.props.recipeBook[index].ingredients;
		const ingredientToArray = (tempIngredients === storageIngredients) ? storageIngredients : this.props.tempIngredients.split(',');

		this.props.recipeBook[index].recipeTitle = this.props.tempName;
		this.props.recipeBook[index].ingredients = ingredientToArray;
		
		localStorage.setItem('recipeBook', JSON.stringify(this.props.recipeBook));
		
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
	            <Modal.Title id="contained-modal-title-lg">Edit Recipe</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <form>
	            	<FormGroup>
	            		<ControlLabel>Recipe</ControlLabel>
				    	<FormControl
				    		onChange={this.displayRecipeName}
				    		value={this.props.tempName}
				    		type="text"
				    		placeholder="Recipe Name"
				    	/>
				    </FormGroup>
				    <FormGroup>
	            		<ControlLabel>Ingredients</ControlLabel>
				    	<FormControl
				    		onChange={this.displayIngredients}
				    		value={this.props.tempIngredients}
				    		style={{resize: 'vertical'}}
				    		componentClass="textarea"
				    		placeholder="Enter Ingredients,Separated,By Commas"
				    	/>
				    </FormGroup>
	            </form>
	          </Modal.Body>
	          <Modal.Footer>
	          	<Button onClick={this.editRecipe} bsStyle="primary">Edit Recipe</Button>
	            <Button onClick={this.props.hideModal}>Close</Button>
	          </Modal.Footer>
        	</Modal>
		);
	}
}

ModalEditRecipe.propTypes = {
	show: PropTypes.bool.isRequired,
	hideModal: PropTypes.func.isRequired,
	onChangeRecipeName: PropTypes.func.isRequired,
	onChangeIngredients: PropTypes.func.isRequired,
	tempName: PropTypes.string.isRequired,
	tempIngredients: PropTypes.string.isRequired,
	recipeBook: PropTypes.array.isRequired,
	id: PropTypes.number.isRequired
};