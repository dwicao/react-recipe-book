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

		this.state = {
			showModal: false,
			id: 0,
			recipeBook: []
		};

		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.addRecipe = this.addRecipe.bind(this);
	}

	close() {
		this.setState({ showModal: false })
	}

	open() {
		this.setState({ showModal: true })
	}

	addRecipe() {
		const recipeTitle = findDOMNode(this.refs.recipeTitle).value;
		const recipeIngredients = findDOMNode(this.refs.recipeIngredients).value.split(',');
		this.setState({
			recipeBook: this.state.recipeBook.concat([{
				id: this.state.id++,
				recipeTitle,
				recipeIngredients
			}])
		});
		localStorage.setItem('recipeBook', JSON.stringify(this.state.recipeBook));
	}

	render() {
		console.log( JSON.stringify(this.state.recipeBook) );
		return (
			<div className="container">
				<div className="row">
					<h1 className="text-center">Recipe Book</h1>
					<h4 className="text-center">Data is saved in browser's local storage</h4>
					<Accordion>
					    <Panel header="ayam goreng" eventKey="1">
					    	<h4 className="text-center">Ingredients</h4>
					    	<hr/>
					    	<ListGroup>
							    <ListGroupItem>Tepung</ListGroupItem>
							    <ListGroupItem>Ayam</ListGroupItem>
							    <ListGroupItem>Micin</ListGroupItem>
							</ListGroup>
							<Button bsStyle="danger">Delete</Button>
							<Button>Edit</Button>
					    </Panel>
					</Accordion>
					<Button onClick={this.open} bsStyle="primary">Add Recipe</Button>
					
					<Modal show={this.state.showModal} onHide={this.close}>
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
			            <Button onClick={this.close}>Close</Button>
			          </Modal.Footer>
			        </Modal>
				</div>
			</div>
		);
	}
}