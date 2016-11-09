import React, { Component, PropTypes } from 'react';
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
					onChangeRecipeName={this.props.onChangeRecipeName}
					onChangeIngredients={this.props.onChangeIngredients}
					clearTempName={this.props.clearTempName}
					clearTempIngredients={this.props.clearTempIngredients}
					tempName={this.props.tempName}
					tempIngredients={this.props.tempIngredients}
					recipeBook={this.props.recipeBook}
				/>
				<Button bsStyle="primary" onClick={this.showModal}>
					Add Recipe
				</Button>
			</div>
		);
	}
}

AddRecipe.propTypes = {
	onChangeRecipeName: PropTypes.func.isRequired,
	onChangeIngredients: PropTypes.func.isRequired,
	clearTempName: PropTypes.func.isRequired,
	clearTempIngredients: PropTypes.func.isRequired,
	tempName: PropTypes.string.isRequired,
	tempIngredients: PropTypes.string.isRequired,
	recipeBook: PropTypes.array.isRequired
};