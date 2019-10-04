import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Howto from './Howto'
import Survey from './Survey'
import Consent from './Consent'
import ConsentAgreed from './ConsentAgreed';

class MainApp extends React.Component{
	  constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.fetch = this.fetch.bind(this);
		this.handleGiveConsent = this.handleGiveConsent.bind(this);
		this.activateSession = this.activateSession.bind(this);
		this.toggleContent = this.toggleContent.bind(this);
		this.state = {
		  activeTab: '1',
		  active: false
		};
	  }

	  toggle(tab) {
		if (this.state.activeTab !== tab) {
		  this.setState({
			activeTab: tab
		  });
		}
	  }
	
	handleGiveConsent(inputstr){
		this.fetch(inputstr)
	}
	
	activateSession(uid){
		console.log("activating session",uid)
		localStorage.setItem('sessionid', uid);
		 this.setState({
			active: true
		  });
	}
	
	async fetch(input) {
        let id = input.split(":")[0]; //conveys type of request. give consent
        let data = input.split(":")[1]; //gives the parameters needed for the server to produce an output for the request
        let clientRequest = {   // Create client->server request message. IMPORTANT: This object must match the structure of whatever object the server is reading into
            parameters: data,
            type: id
        };
        try {
            // Attempt to send `clientRequest` via a POST request to java backend running on port 9999
            // Notice how the end of the url below matches what the server is listening on
            let serverUrl = window.location.href.substring(0, window.location.href.length - 6) + ":9999/handleClientRequest";
            let jsonReturned = await fetch(serverUrl,
                {
                    method: "POST",
                    body: JSON.stringify(clientRequest)
                });
            let ret = await jsonReturned.json();// Wait for server to return and convert it to json.
            let retJSON = JSON.parse(ret); //parse ret to JSON object. check retJSON.type and apply correct behavior 
            if(retJSON.type==="CONSENT" && retJSON.message==="SUCCESS"){
				this.activateSession(retJSON.uuid)
			}
         } catch (e) {
            console.error(e);
        }
    }
    
    toggleContent(){
		let tab1Content=null, tab2=null, tab3=null
		if(!this.state.active){
			tab1Content=<Consent giveConsent={this.handleGiveConsent}/>
		}else{
			tab1Content=<ConsentAgreed />
		}
		if(!this.state.active){
			tab2 = <NavLink className={classnames({ active: this.state.activeTab === '2'})} onClick={() => { this.toggle('2');}} disabled> 
			Learn Rush Hour
			</NavLink>
		}else{
			tab2 = <NavLink className={classnames({ active: this.state.activeTab === '2'})} onClick={() => { this.toggle('2');}}> 
			Learn Rush Hour
			</NavLink>
		}
		if(!this.state.active){
			tab3 = <NavLink className={classnames({ active: this.state.activeTab === '3'})}onClick={() => { this.toggle('3');}} disabled>
			Take Survey
			</NavLink>
		}else{
			tab3 = <NavLink className={classnames({ active: this.state.activeTab === '3'})}onClick={() => { this.toggle('3');}}>
			Take Survey
			</NavLink>
		}
		return [tab1Content,tab2,tab3]
	}
	
	render() {
		let conditional = this.toggleContent();
		 return (
			<div>
				<div><h4>Explaining Intervention in Rush Hour</h4></div>
		         <Nav tabs>
		         <NavItem>
					<NavLink className={classnames({ active: this.state.activeTab === '1'})} onClick={() => { this.toggle('1');}}  >
					  Agree to Participate
					</NavLink>
				  </NavItem>
		          <NavItem>
					{conditional[1]}
				  </NavItem>
				  <NavItem>
					{conditional[2]}
				  </NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
				<TabPane tabId="1">
					<Row>
					  <Col sm="12">
						{conditional[0]}
					  </Col>
					</Row>
				  </TabPane>
				  <TabPane tabId="2">
					<Row>
					  <Col sm="12">
						<Howto />
					  </Col>
					</Row>
				  </TabPane>
				  <TabPane tabId="3">
					<Row>
					  <Col sm="12">
						<Survey uid={localStorage.getItem('sessionid')} />
					  </Col>
					</Row>
				  </TabPane>
				</TabContent>
			</div>
		  );
	 }
}
export default MainApp;
