import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import {
			Accordion,
			Panel,
			Button,
			ListGroup,
			ListGroupItem,
			Modal,
			FormGroup,
			FormControl,
			ControlLabel
		} from 'react-bootstrap';
import {styles} from './Home_style';


export default class Home extends Component {
	constructor(props) {
		super(props);

		const recipeBook = JSON.parse(localStorage.getItem('recipeBook')) || [];
		this.state = {
			showModalAdd: false,
			showModalEdit: false,
			id: 0,
			recipeBook
		};

		this.closeModalAdd = this.closeModalAdd.bind(this);
		this.closeModalEdit = this.closeModalEdit.bind(this);
		this.openModalAdd = this.openModalAdd.bind(this);
		this.openModalEdit = this.openModalEdit.bind(this);
		this.addRecipe = this.addRecipe.bind(this);
	}

	componentDidUpdate() {
		localStorage.setItem('recipeBook', JSON.stringify(this.state.recipeBook));
	}

	closeModalAdd() {
		this.setState({ showModalAdd: false })
	}

	closeModalEdit() {
		this.setState({ showModalEdit: false })
	}

	openModalAdd() {
		this.setState({ showModalAdd: true })
	}

	openModalEdit() {
		this.setState({ showModalEdit: true })
	}

	editRecipe() {
		console.log('editRecipe clicked');
	}

	addRecipe() {
		const recipeTitle = findDOMNode(this.refs.recipeTitle).value;
		const recipeIngredients = findDOMNode(this.refs.recipeIngredients).value.split(',');
		const recipeBookState = this.state.recipeBook;
		this.setState({
			recipeBook: recipeBookState.concat([{
				id: this.state.id++,
				recipeTitle,
				recipeIngredients
			}])
		});
		localStorage.setItem('recipeBook', JSON.stringify(recipeBookState));
		this.closeModalAdd();
	}

	render() {
		console.log( this.state.recipeBook );
		const recipeBookData = this.state.recipeBook;
		return (
			<div className="container">
				<div className="row">
					<h1 className="text-center">Recipe Book</h1>
					<h4 className="text-center">Data is saved in browser's local storage</h4>
					<Accordion>
						{recipeBookData.map( (obj, index) => {
							return (
							    <Panel header={obj.recipeTitle} key={index} eventKey={index}>
							    	<h4 className="text-center">Ingredients</h4>
							    	<hr/>
							    	<ListGroup>
							    		{obj.recipeIngredients.map( ingredient => {
							    			return (
							    				<ListGroupItem>{ingredient}</ListGroupItem>
							    			);
							    		})}
									</ListGroup>
									<Button bsStyle="danger">Delete</Button>
									<Button onClick={this.openModalEdit}>Edit</Button>
							    </Panel>
							);
						})}
					</Accordion>

					<Button onClick={this.openModalAdd} bsStyle="primary">Add Recipe</Button>
					
					<Modal show={this.state.showModalAdd} onHide={this.closeModalAdd}>
			          <Modal.Header closeButton>
			            <Modal.Title>Add Recipe</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
						  <form>
						    <FormGroup>
						      <ControlLabel>Recipe</ControlLabel>
						      <FormControl type="text" ref="recipeTitle" placeholder="Recipe Name" />
						    </FormGroup>
						    <FormGroup controlId="formControlsTextarea">
						      <ControlLabel>Ingredients</ControlLabel>
						      <FormControl ref="recipeIngredients" style={{resize:'vertical'}} componentClass="textarea" placeholder="Enter Ingredients,Separated,By Commas" />
						    </FormGroup>
						  </form>
			          </Modal.Body>
			          <Modal.Footer>
			          	<Button onClick={this.addRecipe} bsStyle="primary">Add Recipe</Button>
			            <Button onClick={this.closeModalAdd}>Close</Button>
			          </Modal.Footer>
			        </Modal>

			        <Modal show={this.state.showModalEdit} onHide={this.closeModalEdit}>
			          <Modal.Header closeButton>
			            <Modal.Title>Edit Recipe</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
						  <form>
						    <FormGroup>
						      <ControlLabel>Recipe</ControlLabel>
						      <FormControl type="text" ref="editRecipeTitle" placeholder="Recipe Name" />
						    </FormGroup>
						    <FormGroup controlId="formControlsTextarea">
						      <ControlLabel>Ingredients</ControlLabel>
						      <FormControl ref="editRecipeIngredients" style={{resize:'vertical'}} componentClass="textarea" placeholder="Enter Ingredients,Separated,By Commas" />
						    </FormGroup>
						  </form>
			          </Modal.Body>
			          <Modal.Footer>
			          	<Button onClick={this.editRecipe} bsStyle="primary">Edit Recipe</Button>
			            <Button onClick={this.closeModalEdit}>Close</Button>
			          </Modal.Footer>
			        </Modal>
				</div>
			</div>
		);
	}
}