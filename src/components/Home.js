import React, { Component } from 'react';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import {styles} from './Home_style';


export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h1 className="text-center">Recipe Book</h1>
					<h4 className="text-center">Data is saved in browser's local storage</h4>
					<RecipeList />
					<AddRecipe />
				</div>
			</div>
		);
	}
}