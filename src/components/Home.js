import React, { Component } from 'react';
import RecipePanel from './RecipePanel';
import AddRecipe from './AddRecipe';


export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: 0,
			tempName: '',
			tempIngredients: '',
			recipeBook: JSON.parse(localStorage.getItem('recipeBook')) || []
		};

		this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
		this.onChangeIngredients = this.onChangeIngredients.bind(this);
		this.clearTempName = this.clearTempName.bind(this);
		this.clearTempIngredients = this.clearTempIngredients.bind(this);
		this.setIdByIndex = this.setIdByIndex.bind(this);
		this.reRender = this.reRender.bind(this);
	}

	onChangeRecipeName(value) {
		this.setState({ tempName: value });
	}

	onChangeIngredients(value) {
		this.setState({ tempIngredients: value });
	}

	clearTempName() {
		this.setState({ tempName: '' });
	}

	clearTempIngredients() {
		this.setState({ tempIngredients: '' });
	}

	setIdByIndex(index) {
		this.setState({ id: index });
	}

	reRender() {
		this.setState(this.state);
	}

	render() {
	//	console.log( 'recipeBook:', JSON.stringify(this.state.recipeBook) );
	//	console.log('tempIngredients:', this.state.tempIngredients);
		return (
			<div className="container">
				<div className="row">
					<h1 className="text-center">Recipe Book</h1>
					<h4 className="text-center">Data is saved in browser's local storage</h4>
					<RecipePanel
						onChangeRecipeName={this.onChangeRecipeName}
						onChangeIngredients={this.onChangeIngredients}
						clearTempName={this.clearTempName}
						clearTempIngredients={this.clearTempIngredients}
						tempName={this.state.tempName}
						tempIngredients={this.state.tempIngredients}
						recipeBook={this.state.recipeBook}
						id={this.state.id} 
						setIdByIndex={this.setIdByIndex}
						reRender={this.reRender}
					/>
					<AddRecipe
						onChangeRecipeName={this.onChangeRecipeName}
						onChangeIngredients={this.onChangeIngredients}
						clearTempName={this.clearTempName}
						clearTempIngredients={this.clearTempIngredients}
						tempName={this.state.tempName}
						tempIngredients={this.state.tempIngredients}
						recipeBook={this.state.recipeBook} 
					/>
					<p style={{color: 'gray'}} className="text-center">Lutfian Dwi Cahyono</p>
				</div>
			</div>
		);
	}
}