import React, { Component } from 'react';
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
import IngredientsList from './IngredientsList';


export default class RecipeList extends Component {
	render() {
		return (
			<Accordion>
			    <Panel header="Collapsible Group Item #1" eventKey="1">
			      <IngredientsList />
			    </Panel>
			    <Panel header="Collapsible Group Item #2" eventKey="2">
			      <IngredientsList />
			    </Panel>
			    <Panel header="Collapsible Group Item #3" eventKey="3">
			      <IngredientsList />
			    </Panel>
			</Accordion>
		);
	}
}