import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class Howto extends React.Component{
	render() {
		 return (
		 <CardGroup>
			<CardGroup>
				<Card>
				  <Card.Img width="50%" variant="top" src="/images/1.png" />
				</Card>
				<Card className="text-center p-3">
				 <Card.Title> Rush Hour with a Twist</Card.Title>
				 <Card.Body>
					<Card.Text>
					  This classic game is played on a grid containing cars (length 2) and trucks (length 3). The player wins by moving the vehicles such that the red goal car can be driven out of the exit (cell without a border) on the grid perimeter. We have added a new twist to the classic game. There is a chance that your puzzle can be solved without moving every vehicle on the board. Which vehicles are those you might ask. That is for you to find out (and have fun)!
					</Card.Text>
				  </Card.Body>
				</Card>
			</CardGroup>	
			<Card className="text-center">
			  <Card.Header><b>Example Play</b></Card.Header>
			</Card>
			<CardGroup>	
				<Card className="text-left">
				  <Card.Img width="40%" variant="bottom" src="/images/1.png" />
				</Card>
				<Card className="text-left">
				  <Card.Img width="40%" variant="bottom" src="/images/2.png" />
				</Card>
				<Card className="text-left">
				  <Card.Img width="40%" variant="bottom" src="/images/3.png" />
				</Card>
				<Card className="text-left">
				  <Card.Img width="40%" variant="bottom" src="/images/4.png" />
				</Card>
				<Card className="text-left">
				  <Card.Img width="40%" variant="bottom" src="/images/6.png" />
				</Card>
			</CardGroup>
			<CardGroup>	
				<Card className="text-left">
					<Card.Body> 
						<Card.Text>
							<b>Task</b><br/>Move goal car (C0) to the exit cell (row 6, column 3)
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="text-left">
					<Card.Body> 
						<Card.Text>
							<b>Step 1</b> <br/>Click on car C3 to select it 
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="text-left">
					<Card.Body> 
						<Card.Text>
							<b>Step 2</b> <br/>To move C3 to the right &rarr; by 1, click on the adjacent free cell on the right (row 6, column 5). <b>Vehicles can only be moved 1 step at a time.</b>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="text-left">
					<Card.Body> 
						<Card.Text>
							<b>Step 3</b> <br/>Click on goal car C0 to select it
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="text-left">
				  <Card.Body> 
						<Card.Text>
							<b>Step 4</b> <br/>Move C0 down &darr; by 1, click on the adjacent free cell below (row 4, column 3). Repeat 2 more times to move C0 to the exit. <br/> <i>This puzzle can be solved by moving <b> only two cars</b></i>!
						</Card.Text>
				  </Card.Body>
				</Card>
			</CardGroup>
		</CardGroup>
			
		  );
	 }
}export default Howto;
