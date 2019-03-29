import React from 'react';
import { connect } from 'react-redux';
import {websockaction } from '../actions/websocket';
import SockJsClient from 'react-stomp';

class Connector extends React.Component {

    handleData = (data)=>{
	this.props.dispatch(websockaction(data.actionType,
					  JSON.parse(data.jsonObject)));
					  
    }

    onConnect=()=>{
	console.log("connect");
    }
    onDisconnect=()=>{
	console.log("disconnect");
    }

    
    
    render(){
	const {chat} = this.props;
	return (
	    <div>
	      <SockJsClient url='/stomp'
    			    topics={['/topic/'   ,
			    '/queue/user'+ this.props.authentication.user.email ] }
    			    onMessage={ this.handleData }
    		onConnect={this.onConnect }
    		onDisconnect={this.onDisconnect}
    		ref={ (client) => { this.clientRef = client; }}
    		/>
		
	    </div>
	);
    }
};

function mapStateToProps(state){
    const {authentication} = state;
    return {
	authentication
    };
}

const connectedConnector = connect(mapStateToProps)(Connector);

export { connectedConnector as Connector };
