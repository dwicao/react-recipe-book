import React, { Component } from 'react';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import {styles} from './Home_style';


export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tempName: '',
			tempIngredients: '',
			recipeBook: JSON.parse(localStorage.getItem('recipeBook')) || []
		};

		this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
		this.onChangeIngredients = this.onChangeIngredients.bind(this);
		this.clearTempName = this.clearTempName.bind(this);
		this.clearTempIngredients = this.clearTempIngredients.bind(this);
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

	render() {
	//	console.log( 'recipeBook:', JSON.stringify(this.state.recipeBook) );
	//	console.log('tempIngredients:', this.state.tempIngredients);
		return (
			<div className="container">
				<div className="row">
					<h1 className="text-center">Recipe Book</h1>
					<h4 className="text-center">Data is saved in browser's local storage</h4>
					<RecipeList />
					<AddRecipe
						onChangeRecipeName={this.onChangeRecipeName}
						onChangeIngredients={this.onChangeIngredients}
						clearTempName={this.clearTempName}
						clearTempIngredients={this.clearTempIngredients}
						tempName={this.state.tempName}
						tempIngredients={this.state.tempIngredients}
						recipeBook={this.state.recipeBook} />
				</div>
			</div>
		);
	}
}