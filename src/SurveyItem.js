import React from 'react'
import Evaluation from './Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import ReactPlayer from 'react-player'


class SurveyItem extends React.Component{
	
	constructor(props) {
		super(props);
		this.submitSuccess = this.submitSuccess.bind(this)
		this.state = {
			show:true
		};
	  }
	
	submitSuccess(arg){
		this.setState({
			 show:arg
		});
	}
	  
	render() {	
		return (
		(this.state.show) ?
			(<Row>
			<Col sm>
			<Card>
			  <Card.Header><b>Example Play {this.props.survey}</b></Card.Header>
			  <Card.Body>
				<Card.Title>Watch video {this.props.survey} for a Rush Hour game play and complete the survey</Card.Title>
				<ReactPlayer url={this.props.url} width="inherit"/>
				<br/>
				<Evaluation quiz={this.props.survey} uid={this.props.uid} success={this.submitSuccess} showalert={this.props.showalert} completed={this.props.completed}/>	
			  </Card.Body>
			</Card>
			</Col>
		 </Row>
		 ) : null	
	  );
	}
}export default SurveyItem;
