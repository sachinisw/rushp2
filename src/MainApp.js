import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Howto from './Howto'
import Survey from './Survey'

class MainApp extends React.Component{
	  constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
		  activeTab: '1'
		};
	  }

	  toggle(tab) {
		if (this.state.activeTab !== tab) {
		  this.setState({
			activeTab: tab
		  });
		}
	  }
	
	render() {
		 return (
			<div>
				<div><h4>Explaining Intervention in Rush Hour</h4></div>
		         <Nav tabs>
		          <NavItem>
					<NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1');}}>
					  Learn Rush Hour
					</NavLink>
				  </NavItem>
				  <NavItem>
					<NavLink className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>
					  Take Survey
					</NavLink>
				  </NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
				  <TabPane tabId="1">
					<Row>
					  <Col sm="12">
						<Howto />
					  </Col>
					</Row>
				  </TabPane>
				  <TabPane tabId="2">
					<Row>
					  <Col sm="12">
						<Survey />
					  </Col>
					</Row>
				  </TabPane>
				</TabContent>
			</div>
		  );
	 }
}
export default MainApp;
