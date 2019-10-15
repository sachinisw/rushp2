import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {demoFormComplete, validText, foundObjectInArray} from './FormValidator'

	
class Demographics extends React.Component{
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.collectData = this.collectData.bind(this);
		this.setErrorValues = this.setErrorValues.bind(this);
		this.validateandSubmit = this.validateandSubmit.bind(this);
		this.fetch = this.fetch.bind(this);
		this.state = {
			q1:"",
			q2:"",
			q3:"",
			q4:"",
			q5:[],
			q5o:"",
			q6:"",
			q6o:"",
			q7:"",
			q7o:"",
			q8:"",
			q8o:"",
			q9:[],
			q9o:"",
			eq1:false,	//empty
			eq2:false,
			eq3:false,
			eq4:false,
			eq5:false,
			eq6:false,
			eq7:false,
			eq8:false,
			eq9:false,
			fq5o:false, //formats
			fq6o:false,
			fq7o:false,
			fq8o:false,
			fq9o:false,
			iq5:false,	//incomplete
			iq6:false,
			iq7:false,
			iq8:false,
			iq9:false,
			quiz:this.props.uid,
			alertmsg1:"",
			alertmsg2:"",
			alertmsg3:"",
			displayAlert:null,
			validated:false,
		};
	  }
	  
	  handleFormSubmit(event) {
		  //In our handler for the submit event, we need to stop the event from bubbling up and trying to submit the form to another page which causes a refresh and then posts all of our data appended to the web address. The line of code that does this is event.preventDefault() 
		event.preventDefault();
		let valuearr = [{q1:this.state.q1},{q2:this.state.q2},{q3:this.state.q3},{q4:this.state.q4},
						{q5:this.state.q5,q5o:this.state.q5o},{q6:this.state.q6,q6o:this.state.q6o},
						{q7:this.state.q7,q7o:this.state.q7o},{q8:this.state.q8,q8o:this.state.q8o},
						{q9:this.state.q9,q9o:this.state.q9o}]
		let errComplete = demoFormComplete(valuearr)
		let txtInput = validText(valuearr)
		this.setErrorValues(errComplete[0], errComplete[1], txtInput)
	  }
	
	validateandSubmit(){
		let al=null
		if(this.state.eq1 || this.state.eq2 ||this.state.eq3 ||this.state.eq4 ||this.state.eq5 
		|| this.state.eq6 || this.state.eq7 || this.state.eq8 || this.state.eq9 || this.state.fq5o || this.state.fq6o
		|| this.state.fq7o || this.state.fq8o || this.state.fq9o || this.state.iq5 || this.state.iq6 || this.state.iq7
		|| this.state.iq8 || this.state.iq9){
			al = <Alert variant="danger"> <Alert.Heading> Errors in Survey! </Alert.Heading> <hr />
				<div className="mb-0">{this.state.alertmsg1}</div>
				<div className="mb-0">{this.state.alertmsg2}</div>
				<div className="mb-0">{this.state.alertmsg3}</div>
			</Alert>
		}else{
			let valuearr = [{q1:this.state.q1},{q2:this.state.q2},{q3:this.state.q3},{q4:this.state.q4},
						{q5:this.state.q5,q5o:this.state.q5o},{q6:this.state.q6,q6o:this.state.q6o},
						{q7:this.state.q7,q7o:this.state.q7o},{q8:this.state.q8,q8o:this.state.q8o},
						{q9:this.state.q9,q9o:this.state.q9o}]
			let obj = { uid:this.props.uid, answers: valuearr};
			this.fetch("DEMO2#"+JSON.stringify(obj))
		}
		this.setState({
			displayAlert:al
		});
	}
	
	setErrorValues(errEmpty, errIncomplete, errText){
		//set empty field error
		let msg='- Question(s):', msg2='- Question(s):', msg3='- Question(s):'
		let e1=false,e2=false,e3=false,e4=false,e5=false,e6=false,e7=false,e8=false,e9=false
		let i5=false,i6=false,i7=false,i8=false,i9=false
		let f5=false,f6=false,f7=false,f8=false,f9=false
		console.log("err empty set for")
		for(let i=0; i<errEmpty.length; i++){
			let ob=errEmpty[i]
			if(Object.keys(ob)[0]==="q1"){
				console.log(ob)
				e1=true
				msg+=" 1,"
			}else if(Object.keys(ob)[0]==="q2") {
				console.log(ob)
				e2=true
				msg+=" 2,"
			}else if(Object.keys(ob)[0]==="q3") {
				console.log(ob)
				e3=true
				msg+=" 3,"
			}else if(Object.keys(ob)[0]==="q4") {
				console.log(ob)
				e4=true
				msg+=" 4,"
			}else if(Object.keys(ob)[0]==="q5") {
				console.log(ob)
				e5=true
				msg+=" 5,"
			}else if(Object.keys(ob)[0]==="q6") {
				console.log(ob)
				e6=true
				msg+=" 6,"
			}else if(Object.keys(ob)[0]==="q7") {
				console.log(ob)
				e7=true
				msg+=" 7,"
			}else if(Object.keys(ob)[0]==="q8") {
				console.log(ob)
				e8=true
				msg+=" 8,"
			}else if(Object.keys(ob)[0]==="q9") {
				console.log(ob)
				e9=true
				msg+=" 9"
			}
		}
		if (errEmpty.length>0) {
			msg+=" can not be blank."
		}else{
			msg=""
		}
		//set incomplete field error
		console.log("err incomplete set to")
		for(let i=0; i<errIncomplete.length; i++){
			let ob=errIncomplete[i]
			if(Object.keys(ob)[0]==="q5" && !foundObjectInArray(errEmpty,Object.keys(ob))){
				console.log(ob)
				i5=true
				msg2+=" 5,"
			}else if(Object.keys(ob)[0]==="q6" && !foundObjectInArray(errEmpty,Object.keys(ob))){
				console.log(ob)
				i6=true
				msg2+=" 6,"
			}else if(Object.keys(ob)[0]==="q7" && !foundObjectInArray(errEmpty,Object.keys(ob))){
				console.log(ob)
				i7=true
				msg2+=" 7,"
			}else if(Object.keys(ob)[0]==="q8" && !foundObjectInArray(errEmpty,Object.keys(ob))){
				console.log(ob)
				i8=true
				msg2+=" 8,"
			}else if(Object.keys(ob)[0]==="q9" && !foundObjectInArray(errEmpty,Object.keys(ob))){
				console.log(ob)
				i9=true
				msg2+=" 9"
			}
		}
		if (errIncomplete.length>0) {
			msg2+=" if option 'Other' is selected, text box must be filled."
		}else{
			msg2=""
		}
		//set text format error
		console.log("error text format set to", errText)
		for(let i=0; i<errText.length; i++){
			let ob=errText[i]
			if(Object.keys(ob)[0]==="q5" && !foundObjectInArray(errEmpty,Object.keys(ob))
			&& !foundObjectInArray(errIncomplete,Object.keys(ob))){
				console.log(ob)
				f5=true
				msg3+=" 5,"
			}else if(Object.keys(ob)[0]==="q6" && !foundObjectInArray(errEmpty,Object.keys(ob))
			&& !foundObjectInArray(errIncomplete,Object.keys(ob))){
				console.log(ob)
				f6=true
				msg3+=" 6,"
			}else if(Object.keys(ob)[0]==="q7" && !foundObjectInArray(errEmpty,Object.keys(ob))
			&& !foundObjectInArray(errIncomplete,Object.keys(ob))){
				console.log(ob)
				f7=true
				msg3+=" 7,"
			}else if(Object.keys(ob)[0]==="q8" && !foundObjectInArray(errEmpty,Object.keys(ob))
			&& !foundObjectInArray(errIncomplete,Object.keys(ob))){
				console.log(ob)
				f8=true
				msg3+=" 8,"
			}else if(Object.keys(ob)[0]==="q9" && !foundObjectInArray(errEmpty,Object.keys(ob))
			&& !foundObjectInArray(errIncomplete,Object.keys(ob))){
				console.log(ob)
				f9=true
				msg3+=" 9"
			}
		}
		if (errText.length>0) {
			msg3+=" only letters, numbers, commas, whitespaces are allowed in text boxes."
		}else{
			msg3=""
		}
		
		this.setState({
			eq1:e1,	//empty
			eq2:e2,
			eq3:e3,
			eq4:e4,
			eq5:e5,
			eq6:e6,
			eq7:e7,
			eq8:e8,
			eq9:e9,
			fq5o:f5, //formats
			fq6o:f6,
			fq7o:f7,
			fq8o:f8,
			fq9o:f9,
			iq5:i5,	//incomplete
			iq6:i6,
			iq7:i7,
			iq8:i8,
			iq9:i9,
			alertmsg1:msg,
			alertmsg2:msg2,
			alertmsg3:msg3,
		}, 
		function () 
		{
			this.validateandSubmit();
		});
	}
	
	collectData(event){
		  let q5temp=this.state.q5
		  let q9temp=this.state.q9
		if(event.target.name==="q1"){
			this.setState({
			 q1:event.target.value		 
			 });
		}else if(event.target.name==="q2"){
			this.setState({
			 q2:event.target.value		 
			 });
		}else if(event.target.name==="q3"){
			this.setState({
			 q3:event.target.value		 
			 });
		}else if(event.target.name==="q4"){
			this.setState({
			 q4:event.target.value		 
			 });
		}else if(event.target.name==="q6"){
			if(!event.target.value.includes("other")){
				this.setState({
					q6o:""		 
				});
			}
			this.setState({
			 q6:event.target.value		 
			 });
		}else if(event.target.name==="q6o"){
			this.setState({
			 q6o:event.target.value		 
			 });
		}else if(event.target.name==="q7"){
			if(!event.target.value.includes("other")){
				this.setState({
					q7o:""		 
				});
			}
			this.setState({
			 q7:event.target.value		 
			 });
		}else if(event.target.name==="q7o"){
			this.setState({
			 q7o:event.target.value		 
			 });
		}else if(event.target.name==="q8"){
			if(!event.target.value.includes("other")){
				this.setState({
					q8o:""		 
				});
			}
			this.setState({
			 q8:event.target.value		 
			 });
		}else if(event.target.name==="q8o"){
			this.setState({
			 q8o:event.target.value		 
			 });
		}else if(event.target.name==="q5"){ //checkboxes
			if(event.target.checked){//add
				q5temp.push(event.target.value)
			}else{//remove
				q5temp.splice(q5temp.indexOf(event.target.value),1)
				if(event.target.value.includes("other")){
					this.setState({
						q5o:""		 
					});
				}
			}	
		}else if(event.target.name==="q9"){ //checkboxes
			if(event.target.checked){ //add
				q9temp.push(event.target.value)
			}else{//remove
				q9temp.splice(q9temp.indexOf(event.target.value),1)
				if(event.target.value.includes("other")){
					this.setState({
						q9o:""		 
					});
				}
			}
		}else if(event.target.name==="q5o"){
			this.setState({
			 q5o:event.target.value		 
			 });
		}else if(event.target.name==="q9o"){
			this.setState({
			 q9o:event.target.value	 
			 });
		}
		this.setState({
			 q5:q5temp,
			 q9:q9temp
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
            if(retJSON.type==="DEMO2" && retJSON.message==="SUCCESS"){
				this.props.unmount(true)
			}
         } catch (e) {
            console.error(e);
        }
    }
    
	render() {
		 return (
			 <Container>
			 <Card>
				 <Form onSubmit={this.handleFormSubmit} noValidate>
				  <Form.Group>
					<Form.Label><h5>Survey on Interests In Solving Logic Puzzles</h5></Form.Label>
					<Form.Text>Dear Participant,<br />
					Thank you for participating in our Please complete the following questionnaire as accurately as possible before completing the experiment tasks. The purpose of this questionnaire is to gather information about your interests in logic puzzle solving (e.g., Rush Hour, Sudoku, sliding puzzles). The information you provide will be kept anonymous. <br />
					Please answer ALL questions. </Form.Text>
				  </Form.Group>
				  <Form.Group>{this.state.displayAlert}</Form.Group>
					<Form.Group>
					  <Form.Label className={this.state.eq1?'form-label-error':''}>
						<b>Q1:</b> State your age in years
					  </Form.Label>
					 <Form.Group as={Col}>
						<Form.Check inline  type="radio" label="less than 20" name="q1" value="less than 20" onChange={this.collectData}
						  required
						/>
						<Form.Check inline type="radio" label="20 – 25" name="q1" value="20 – 25" onChange={this.collectData}
						  required
						/>
						<Form.Check inline type="radio" label="26 – 30" name="q1"   value="26 – 30" onChange={this.collectData}
						  required
						/>
						<Form.Check inline type="radio" label="31 – 35" name="q1"   value="31 – 35" onChange={this.collectData}
						  required
						/>
						<Form.Check inline type="radio" label="36 – 40"  name="q1"   value="36 – 40" onChange={this.collectData}
						  required
						/>
						<Form.Check inline type="radio" label="41 and above"  name="q1"   value="41+" onChange={this.collectData}
						  required
						/>
						<Form.Check inline type="radio" label="I do not want to give that information"  name="q1" value="no answer"
						  onChange={this.collectData}
						  required
						/>
					 </Form.Group>
					</Form.Group>

					<Form.Group>
					  <Form.Label className={this.state.eq2?'form-label-error':''}>
						<b>Q2:</b> State your gender
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio"  label="Male" name="q2" value="Male"  onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="Female" name="q2" value="Female" onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="I do not want to give that information" name="q2"  value="no ans"  onChange={this.collectData}  required
						/>
					  </Col>
					</Form.Group>

					<Form.Group>
					  <Form.Label className={this.state.eq3?'form-label-error':''}>
						<b>Q3:</b> Do you like solving logic puzzles in general (e.g., Sudoku, Sliding block puzzles)?
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio" label="I agree strogly" name="q3" value="5" onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="I agree somewhat" name="q3" value="4" onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="I am neutral about it" name="q3" value="3" onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="I disagree somewhat" name="q3" value="2" onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="I disagree strongly" name="q3" value="1" onChange={this.collectData} required />
					  </Col>
					</Form.Group>

					<Form.Group>
					  <Form.Label className={this.state.eq4?'form-label-error':''}>
						<b>Q4:</b> Did you like the Rush Hour puzzle solving task?
					  </Form.Label>
					  <Col>
						<Form.Check inline
						  type="radio" label="I agree strogly" name="q4" value="5" onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="I agree somewhat" name="q4" value="4" onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="I am neutral about it" name="q4" value="3" onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="I disagree somewhat" name="q4"  value="2" onChange={this.collectData} required />
						<Form.Check inline
						  type="radio" label="I disagree strongly" name="q4" value="1"  onChange={this.collectData} required />
					  </Col>
					</Form.Group>
					
					<Form.Group>
					  <Form.Label className={(this.state.eq5 || this.state.iq5 || this.state.fq5o)?'form-label-error':''}>
						<b>Q5:</b> What about solving logic puzzles that interest you the most?
					  </Form.Label>
					 <Form.Group as={Col}>
						<Form.Check inline
						  type="checkbox" label="Fun and relaxing" name="q5" value="fun" onChange={this.collectData} required  />
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Check inline
						  type="checkbox" label="Sharpens my critical thinking skills" name="q5" value="critical thinking" onChange={this.collectData} required  />
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Check inline
						  type="checkbox" label="Challenge my friends and family to beat my time/score" name="q5" value="challenge" 	  onChange={this.collectData} required  />
					</Form.Group>
					 <Form.Group>
					  <Form.Group as={Col}>
						<Form.Check inline
						  type="checkbox" label="Other (specify)" name="q5" value="q5other" onChange={this.collectData} required />
						<Form.Control inline
							type="text" name="q5o" value={this.state.q5o} onChange={this.collectData}  />
					  </Form.Group>
					</Form.Group>
					</Form.Group>					

					<Form.Group>
					  <Form.Label className={(this.state.eq6 || this.state.iq6 || this.state.fq6o)?'form-label-error':''}>
						<b>Q6:</b> How often do you solve logic puzzles?
					  </Form.Label>
					  <Form.Group as={Col}>
						<Form.Check inline
						  type="radio" label="More than once a day"  name="q6" value="more than once a day" onChange={this.collectData}   required />
						</Form.Group>
					  <Form.Group as={Col}>
						<Form.Check inline
						  type="radio" label="Once a day" name="q6" value="Once a day" onChange={this.collectData} required />
						</Form.Group>
					  <Form.Group as={Col}>						
						<Form.Check inline
						  type="radio" label="Once every 2-3 days" name="q6" value="Once every 2-3 days" onChange={this.collectData} required />
						</Form.Group>
					  <Form.Group as={Col}>						
						<Form.Check inline
						  type="radio" label="Once a week" name="q6" value="Once a week" onChange={this.collectData} required />
						</Form.Group>
					  <Form.Group as={Col}>						
						<Form.Check inline
						  type="radio" label="Once every 2-3 weeks" name="q6" value="Once every 2-3 weeks" onChange={this.collectData} required />
						</Form.Group>
					  <Form.Group as={Col}>						
						<Form.Check inline
						  type="radio" label="Once a month" name="q6" value="Once a month" onChange={this.collectData} required />
						</Form.Group>
					<Form.Group>
					  <Form.Group as={Col}>						
						<Form.Check inline
						  type="radio" label="Other (specify)" name="q6" value="q6other" onChange={this.collectData} required />
						<Form.Control inline
							type="text" name="q6o" value={this.state.q6o} onChange={this.collectData}  />
						</Form.Group>
					  </Form.Group>
					</Form.Group>
					
					<Form.Group>
					  <Form.Label className={(this.state.eq7 || this.state.iq7 || this.state.fq7o)?'form-label-error':''}>
						<b>Q7:</b> If the puzzle you are solving appear to be difficult, what do you most often do?
					  </Form.Label>
					  <Form.Group as={Col}>
						<Form.Check inline
						  type="radio" label="Give up" name="q7" value="Give up" onChange={this.collectData} required />
						</Form.Group>
					  <Form.Group as={Col}>
						<Form.Check inline
						  type="radio" label="Keep trying until I solve it" name="q7" value="Keep trying" onChange={this.collectData}  required />
						</Form.Group>
						<Form.Group as={Col}>
						<Form.Check inline
						  type="radio" label="Ask for help (help guides, online forums etc.)" name="q7" value="Ask for help" onChange={this.collectData} required />
						</Form.Group>
						<Form.Group>
						<Form.Group as={Col}>
							<Form.Check inline
							  type="radio" label="Other (specify)" name="q7" value="q7other" onChange={this.collectData} required />
							<Form.Control inline
								type="text"	name="q7o" value={this.state.q7o}	onChange={this.collectData} />
					  </Form.Group>
					  </Form.Group>
					</Form.Group>
					
					<Form.Group>
					  <Form.Label className={(this.state.eq8 || this.state.iq8 || this.state.fq8o)?'form-label-error':''}>
						<b>Q8:</b> Imagine you are solving an all new puzzle that you have not seen before. If you were to get stuck while solving the puzzle, which of these options would you most like to be available?
					  </Form.Label>
					  <Form.Group as={Col}>
						<Form.Check inline
						  type="radio"  label="A suggestion/tip to help me get past the problem I am in now"  name="q8"  value="suggestion"onChange={this.collectData} required />
						</Form.Group>
						<Form.Group as={Col}>
						<Form.Check inline
						  type="radio" label="A timely warning that lets me know my current strategy is faulty" name="q8" value="warning" onChange={this.collectData} required />
						</Form.Group>						
						<Form.Group as={Col}>
						<Form.Check inline
						  type="radio" label="A timely warning plus an explanation on how to avoid similar problems in the future"  name="q8"   value="warning and explanation" onChange={this.collectData} required	/>
						</Form.Group>						
						<Form.Group as={Col}>
						<Form.Check inline
						  type="radio" label="I do not want outside help. I want to solve a puzzle on my own" name="q8" value="no help"
						  onChange={this.collectData} required />
						</Form.Group>
						<Form.Group>
							<Form.Group as={Col}>
								<Form.Check inline
								  type="radio" label="Other (specify)" name="q8" value="q8other" onChange={this.collectData} required />
								<Form.Control inline
									type="text" name="q8o" value={this.state.q8o}	onChange={this.collectData} />
						  </Form.Group>
					</Form.Group>
					</Form.Group>
					
					 <Form.Group>
					  <Form.Label className={(this.state.eq9 || this.state.iq9 || this.state.fq9o)? 'form-label-error':''}>
						<b>Q9:</b> What do you play logic puzzles on? (Select all that apply)
					  </Form.Label>
					  	<Form.Group as={Col}>
							<Form.Check inline
							  type="checkbox" label="Mobile" name="q9" value="mobile" onChange={this.collectData} />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check inline
							  type="checkbox"
							  label="Gaming consoles (e.g., XBox)" name="q9" value="console" onChange={this.collectData} />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check inline
							  type="checkbox" label="Personal computer/laptop"  name="q9" value="laptop" onChange={this.collectData} />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Check inline
							  type="checkbox" label="Puzzle books, magazines, news papers"  name="q9" value="paper"  onChange={this.collectData}   />
						</Form.Group>
						<Form.Group>
						<Form.Group as={Col}>
							<Form.Check inline
							  type="checkbox" label="Others (specify)" name="q9" value="q9other" onChange={this.collectData} />
							<Form.Control
								type="text"	name="q9o" value={this.state.q9o} onChange={this.collectData} />
						</Form.Group>
						</Form.Group>
					</Form.Group>	
						  
				  <Form.Group as={Row}>
					<Col sm={{ span: 10, offset: 2 }}>
						<br/>
					  <Button type="submit" >Submit and Finish</Button>
					</Col>
				  </Form.Group>
			</Form>
			</Card>
		 </Container>
		);
	 }
}export default Demographics;
