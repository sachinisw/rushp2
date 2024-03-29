import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

class Debrief extends React.Component{
	
	constructor(props) {
		super(props);
	  }
	  
	render() {
		 return (
		 <Container fluid={true}>
		 <Row>
			<Col sm>
			<Card>
			  <Card.Header><b>Debriefing</b></Card.Header>
			  <Card.Body>
				<Card.Text>
				<b>TITLE OF STUDY:</b> <br/>
				Evaluating Explanations of Intervention in Rush Hour<br/><br/>

				<b>PRINCIPAL INVESTIGATOR:</b><br/>
				Darrell Whitley, Ph.D., Professor<br/>
				Department of Computer Science<br/>
				L.Darrell.Whitley@ColoState.EDU <br/>
				(970) 491-5373<br/>
				<br/>
				<b>CO-PRINCIPAL INVESTIGATOR:</b><br/>
				Sachini Weerawardhana<br/>
				Department of Computer Science<br/>
				sachini@cs.colostate.edu<br/>
				(970) 818-6719<br/><br/>

				<b>WHAT WAS BEING STUDIED?</b><br/>
				When a human user is engaged in tasks with heavy cognitive load, he/she may unwittingly execute actions that will challenge their own progress (e.g., while solving a puzzle, making a move that will eventually lead to a dead-end forcing the user to backtrack). In these situations, a passive observer agent, akin to an automated support system, intervening to help the user reach his/her intended goal  will be beneficial. We presented you with three videos of sample Rush Hour game plays. In each video, when the player selected a vehicle that need not be moved, a message was shown to explain why the user was interrupted. You were asked to rate intervention explanations given in each game play sample. <br />
				The purpose of this study is to understand commonly occurring situations that require intervention when users are engaged in a complex puzzle solving task and how we can use AI to produce explanations of intervention to further help the user learn tasks faster. We hoped to evaluate how satisfied the users were with the explanations generated by machine learning algorithms.<br/>

				<b>WHY DECEPTION WAS NECESSARY? </b><br/>
				For the researchers to be able to simulate a task with high levels of cognitive engagement, and obtain unbiased data to understand commonly occurring situations in this kind of an environment, the players (in the videos) were only informed that certain vehicles on the board need not be moved to solve the puzzle and not specifically which vehicles. If the player were directly informed about the specific vehicles, the player would have shown more skills in learning game strategies, similar to an expert user. This case is different from the situation we are interested in investigating, which is the learning phase of an software application.<br/>
				
				<b>HOW WILL THE RESULTS BE EVALUATED?</b><br/>
				All responses to the survey questions have been anonymised such that it will not be possible to connect the collected data with you personally. <br/>

				<b>HOW CAN I WITHDRAW FROM THE STUDY?</b><br/>
				Contact the PI/Co-PI via email whenever you wish to withdraw from the study and the data collected will be deleted. <br/>

				<b>OTHER RESOURCES</b> <br/>
				Thank you for taking part in this study! We would be happy to direct you to information about this study and similar applications of machine learning. Please contact the PI/Co-PI via email. <br />
				</Card.Text>
				 <Alert variant="dark">You may now close the browser tab/window to exit the application</Alert>
			  </Card.Body>
			</Card>
			</Col>		
		 </Row>
		 
		</Container> 
	  );
	}
}export default Debrief;
