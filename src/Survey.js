import React from 'react'
import Evaluation from './Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ReactPlayer from 'react-player'

class Survey extends React.Component{
	
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	  }
	  
	  handleClick(tab) {
		console.log("show form now!")
	  }
	  	  
	render() {
		 return (
		 <CardGroup>
			<Card>
			  <Card.Header><b>Example Play 1</b></Card.Header>
			  <Card.Body>
				<Card.Title>Watch video 1 for a Rush Hour game play and complete the survey</Card.Title>
				<ReactPlayer url="https://www.youtube.com/embed/VpDtWEguoJ4" width="inherit"/>
				<Button variant="primary" onClick={this.handleClick}>Video 1 Survey</Button>
			  </Card.Body>
			</Card>

			<Card>
			  <Card.Header><b>Example Play 2</b></Card.Header>
			  <Card.Body>
				<Card.Title>Watch video 2 for a Rush Hour game play and complete the survey</Card.Title>	
				<ReactPlayer url="https://www.youtube.com/embed/VpDtWEguoJ4" width="inherit" />
				<Button variant="primary" onClick={this.handleClick}>Video 2 Survey</Button>
			  </Card.Body>
			</Card>

			<Card>
			  <Card.Header><b>Example Play 3</b></Card.Header>
			  <Card.Body>
				<Card.Title>Watch video 3 for a Rush Hour game play and complete the survey</Card.Title>
				<ReactPlayer url="https://www.youtube.com/embed/VpDtWEguoJ4" width="inherit" />
				<Button variant="primary" onClick={this.handleClick}>Video 3 Survey</Button>
			  </Card.Body>
			</Card>
		 </CardGroup>
		 		 
	  );
	}
}export default Survey;
