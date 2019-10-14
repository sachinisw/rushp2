import React from 'react'
import Container from 'react-bootstrap/Container'
import SurveyItem from './SurveyItem'
import Alert from 'react-bootstrap/Alert'

class Survey extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			show:false,
			currentQuiz:0
		};
		this.displayAlert = this.displayAlert.bind(this);
		this.alertOnClose = this.alertOnClose.bind(this);
	}
	
	displayAlert(status,quiz){
		this.setState({
			 show:status,
			 currentQuiz:quiz
		});
	}
	
	alertOnClose(){
		this.setState({
			 show:false
		});
	}
	
	render() {
		let alert1=null, alert2=null, alert3=null
		if(this.state.currentQuiz===1){
			alert1 = <Alert variant="success" dismissible onClose={this.alertOnClose}> Survey 1 was succesfully submitted</Alert>
		}
		if(this.state.currentQuiz===2){
			alert2 = <Alert variant="success" dismissible onClose={this.alertOnClose}> Survey 2 was succesfully submitted</Alert>
		}
		if(this.state.currentQuiz===3){
			alert3 = <Alert variant="success" dismissible onClose={this.alertOnClose}> Survey 3 was succesfully submitted</Alert>
		}
		
		 return (
		  <Container>
			<SurveyItem survey={1} url="https://www.youtube.com/embed/VpDtWEguoJ4" uid={this.props.uid} 
			showalert={this.displayAlert} completed={this.props.completed}/>
			{alert1}
			<SurveyItem survey={2} url="https://www.youtube.com/embed/VpDtWEguoJ4" uid={this.props.uid} showalert={this.displayAlert} completed={this.props.completed}/>
			{alert2}
			<SurveyItem survey={3} url="https://www.youtube.com/embed/VpDtWEguoJ4" uid={this.props.uid} showalert={this.displayAlert} completed={this.props.completed}/>
			{alert3}
		 </Container>
	  );
	}
}export default Survey;
