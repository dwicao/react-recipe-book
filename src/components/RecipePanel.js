import React, { Component, PropTypes } from 'react';
import ModalEditRecipe from './ModalEditRecipe';
import {
	ListGroup,
	ListGroupItem,
	Button,
	Accordion,
	Panel
} from 'react-bootstrap';
import './RecipePanel_style.css';

export default class RecipePanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false
		};

		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.deleteRecipe = this.deleteRecipe.bind(this);
	}

	showModal(index) {
		const currentRecipeName = this.props.recipeBook[index].recipeTitle;
		const currentIngredient = this.props.recipeBook[index].ingredients;

		this.props.onChangeRecipeName(currentRecipeName);
		this.props.onChangeIngredients(currentIngredient);
		this.props.setIdByIndex(index);
	    this.setState({show: true});
	}

	hideModal() {
	  	this.setState({show: false});
	  	this.props.clearTempName();
	  	this.props.clearTempIngredients();
	}

	deleteRecipe(index) {
		this.props.recipeBook.splice(index, 1);
		localStorage.setItem('recipeBook', JSON.stringify(this.props.recipeBook));
		this.props.reRender();
	}

	render() {
		return (
			<div>
				<ModalEditRecipe
					show={this.state.show}
					hideModal={this.hideModal}
					tempName={this.props.tempName}
					tempIngredients={this.props.tempIngredients}
					onChangeRecipeName={this.props.onChangeRecipeName}
					onChangeIngredients={this.props.onChangeIngredients}
					recipeBook={this.props.recipeBook}
					id={this.props.id}
				/>
				<Accordion>
				{this.props.recipeBook.map( (obj, index) => (
					<Panel header={obj.recipeTitle} eventKey={index}>
						<h4 className="text-center">Ingredients</h4>
						<hr />
						<ListGroup>
							{obj.ingredients.map(ingredient => (
								<ListGroupItem>{ingredient}</ListGroupItem>
							))}
						</ListGroup>
						<Button onClick={() => this.deleteRecipe(index)} bsStyle="danger">Delete</Button>
						<Button onClick={() => this.showModal(index)} style={{marginLeft: 10}}>
							Edit
						</Button>
					</Panel>
				))}
				</Accordion>
			</div>
		);
	}
}

RecipePanel.propTypes = {
	onChangeRecipeName: PropTypes.func.isRequired,
	onChangeIngredients: PropTypes.func.isRequired,
	clearTempName: PropTypes.func.isRequired,
	clearTempIngredients: PropTypes.func.isRequired,
	tempName: PropTypes.string.isRequired,
	tempIngredients: PropTypes.string.isRequired,
	recipeBook: PropTypes.array.isRequired,
	id: PropTypes.number.isRequired, 
	setIdByIndex: PropTypes.func.isRequired,
	reRender: PropTypes.func.isRequired
};