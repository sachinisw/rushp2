import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class Evaluation extends React.Component{
	render() {
		 return (
				<Form>
					  <Form.Group>
						<Form.Label>Explanation 1: This vehicle need not be moved because <b>(explanations from interpretable machine learning models)</b></Form.Label>
					  </Form.Group>
					  <fieldset>
						<Form.Group as={Row}>
						  <Form.Label as="legend" column sm={2}>
							This explanation on how the interruption decision was made is satisfying
						  </Form.Label>
						  <Col sm={10}>
							<Form.Check inline
							  type="radio"
							  label="5 I agree strogly"
							  name="formHorizontalRadios"
							  id="q1rd15"
							/>
							<Form.Check inline
							  type="radio"
							  label="4 I agree somewhat"
							  name="formHorizontalRadios"
							  id="q1rd14"
							/>
							<Form.Check inline
							  type="radio"
							  label="3 I am neutral about it"
							  name="formHorizontalRadios"
							  id="q1rd13"
							/>
							<Form.Check inline
							  type="radio"
							  label="2 I disagree somewhat"
							  name="formHorizontalRadios"
							  id="q1rd12"
							/>
							<Form.Check inline
							  type="radio"
							  label="1 I disagree strongly"
							  name="formHorizontalRadios"
							  id="q1rd11"
							/>
						  </Col>
						</Form.Group>
					  </fieldset>
					  <Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
						  <Button type="submit">Submit</Button>
						</Col>
					  </Form.Group>
				</Form>		
		  );
	 }
}export default Evaluation;
