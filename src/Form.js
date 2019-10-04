import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {validateEvaluation, hasError} from './FormValidator'
	
class Evaluation extends React.Component{
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.fetch = this.fetch.bind(this);
		this.state = {
			values:[],
			quiz:this.props.uid,
		};
	  }
	  
	  handleFormSubmit(event) {
		  //In our handler for the submit event, we need to stop the event from bubbling up and trying to submit the form to another page which causes a refresh and then posts all of our data appended to the web address. The line of code that does this is event.preventDefault() 
		event.preventDefault();
		let errors = validateEvaluation(this.state.values) //empty array means no error
		let haserror = hasError(errors) //false means no error
		if(!haserror){//if no error send type.uid,data to server and hide form.
			let obj = { uid:this.props.uid, quizid: this.props.quiz, answers: this.state.values };
			console.log(JSON.stringify(obj))
			this.fetch("SATIS#"+JSON.stringify(obj))
			this.props.success(false)
			this.props.showalert(true,this.props.quiz)
		}else{ //form has errors. can't submit
			
		}
	  }
	  
	  onChange(event){
		let vals=this.state.values
		vals.push({[event.target.name]:event.target.value})		  
		this.setState({
			 values:vals
		 });
	  }         
	  
	async fetch(input) {
		console.log(input)
        let id = input.split("#")[0]; //conveys type of request. give consent
        let data = input.split("#")[1]; //gives the parameters needed for the server to produce an output for the request
        let clientRequest = {   // Create client->server request message. IMPORTANT: This object must match the structure of whatever object the server is reading into
            parameters: data,
            type: id
        };
        try {
            // Attempt to send `clientRequest` via a POST request to java backend running on port 9999// Notice how the end of the url below matches what the server is listening on
            let serverUrl = window.location.href.substring(0, window.location.href.length - 6) + ":9999/handleClientRequest";
            let jsonReturned = await fetch(serverUrl,
                {
                    method: "POST",
                    body: JSON.stringify(clientRequest)
                });
            let ret = await jsonReturned.json();// Wait for server to return and convert it to json.
            let retJSON = JSON.parse(ret); //parse ret to JSON object. check retJSON.type and apply correct behavior 
            if(retJSON.type==="SATIS"){
				//this.activateSession(retJSON.uuid)
			}
         } catch (e) {
            console.error(e);
        }
    }
    
	render() {
		 return (
				 <Form onSubmit={this.handleFormSubmit}>
				  <Form.Group>
					<Form.Label><b>Explanation 1: This vehicle need not be moved because (explanations from interpretable machine learning models)</b></Form.Label>
				  </Form.Group>
					<Form.Group>
					  <Form.Label>
						<b>Q1:</b> This explanation on why the player was interrupted is satisfying
					  </Form.Label>
					  <Col>
						<Form.Check inline  type="radio" label="I agree strogly" name="q1" value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline type="radio" label="I agree somewhat" name="q1" value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline type="radio" label="I am neutral about it" name="q1"   value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline type="radio" label="I disagree somewhat" name="q1"   value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline type="radio" label="I disagree strongly"  name="q1"   value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>

					<Form.Group>
					  <Form.Label>
						<b>Q2:</b> This explanation of why the player was interrupted has sufficient detail
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"
						  label="I agree strogly"
						  name="q2"
						  value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I agree somewhat"
						  name="q2"
						  value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I am neutral about it"
						  name="q2"
						  value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree somewhat"
						  name="q2"
						  value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree strongly"
						  name="q2"
						  value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>

					<Form.Group>
					  <Form.Label>
						<b>Q3:</b> This explanation of why the player was interrupted seems complete
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"
						  label="I agree strogly"
						  name="q3"
						  value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I agree somewhat"
						  name="q3"
						  value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I am neutral about it"
						  name="q3"
						  value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree somewhat"
						  name="q3"
						  value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree strongly"
						  name="q3"
						  value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>

					<Form.Group>
					  <Form.Label>
						<b>Q4:</b> This explanation of why the player was interrupted is useful to my learning to play Rush Hour
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"
						  label="I agree strogly"
						  name="q4"
						  value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I agree somewhat"
						  name="q4"
						  value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I am neutral about it"
						  name="q4"
						  value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree somewhat"
						  name="q4"
						  value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree strongly"
						  name="q4"
						  value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>
					
					<Form.Group>
					  <Form.Label>
						<b>Q5:</b> This explanation lets me judge when I should trust and not trust the interruption
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"
						  label="I agree strogly"
						  name="q5"
						  value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I agree somewhat"
						  name="q5"
						  value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I am neutral about it"
						  name="q5"
						  value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree somewhat"
						  name="q5"
						  value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree strongly"
						  name="q5"
						  value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>					
				  
				  <Form.Group>
					<Form.Label><b>Explanation 2: This vehicle need not be moved because (explanations from causal models)</b></Form.Label>
				  </Form.Group>

					<Form.Group>
					  <Form.Label>
						<b>Q1:</b> This explanation on why the player was interrupted is satisfying
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"
						  label="I agree strogly"
						  name="q6"
						  value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I agree somewhat"
						  name="q6"
						  value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I am neutral about it"
						  name="q6"
						  value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree somewhat"
						  name="q6"
						  value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree strongly"
						  name="q6"
						  value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>
					
					<Form.Group>
					  <Form.Label>
						<b>Q2:</b> This explanation of why the player was interrupted has sufficient detail
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"
						  label="I agree strogly"
						  name="q7"
						  value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I agree somewhat"
						  name="q7"
						  value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I am neutral about it"
						  name="q7"
						  value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree somewhat"
						  name="q7"
						  value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree strongly"
						  name="q7"
						  value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>
					
					<Form.Group>
					  <Form.Label>
						<b>Q3:</b> This explanation of why the player was interrupted seems complete
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"
						  label="I agree strogly"
						  name="q8"
						  value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I agree somewhat"
						  name="q8"
						  value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I am neutral about it"
						  name="q8"
						  value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree somewhat"
						  name="q8"
						  value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree strongly"
						  name="q8"
						  value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>
											
					<Form.Group>
					  <Form.Label>
						<b>Q4:</b> This explanation of why the player was interrupted is useful to my learning to play Rush Hour
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"
						  label="I agree strogly"
						  name="q9"
						  value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I agree somewhat"
						  name="q9"
						  value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I am neutral about it"
						  name="q9"
						  value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree somewhat"
						  name="q9"
						  value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree strongly"
						  name="q9"
						  value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>
											
					<Form.Group>
					  <Form.Label>
						<b>Q5:</b> This explanation lets me judge when I should trust and not trust the interruption
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"
						  label="I agree strogly"
						  name="q10"
						  value="5"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I agree somewhat"
						  name="q10"
						  value="4"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I am neutral about it"
						  name="q10"
						  value="3"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree somewhat"
						  name="q10"
						  value="2"
						  onChange={this.onChange}
						  required
						/>
						<Form.Check inline
						  type="radio"
						  label="I disagree strongly"
						  name="q10"
						  value="1"
						  onChange={this.onChange}
						  required
						/>
					  </Col>
					</Form.Group>
									  
				  <Form.Group as={Row}>
					<Col sm={{ span: 10, offset: 2 }}>
					  <Button type="submit">Submit Survey Video {this.props.quiz} </Button>
					</Col>
				  </Form.Group>
			</Form>
		);
	 }
}export default Evaluation;
