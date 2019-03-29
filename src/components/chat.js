import React from 'react';
import { connect } from 'react-redux';
import {websockaction } from '../actions/websocket';
import {message} from '../actions/chat';
import SockJsClient from 'react-stomp';
import './chat.css';
class Chat extends React.Component {

    state = {
	message: ''
    }

    handleChange=(e)=>{
	const { name, value } = e.target;
        this.setState({ [name]: value });

    }

    handleKeyPress=(e)=>{
	if (e.key === 'Enter') {
	    this.props.dispatch(message(this.state.message,'all'));
	    this.setState({message: ''});
	}

    }
    
    drawItem=(item,i)=>{
	return(<div className="chatitem" key={i} >
	       <div className="chatfrom">{item.from}</div>
	       <div className="chatmessage">{item.message}</div>
	       <div className="chattime">{item.formatedWhen}</div>
	       </div>
	      );
    }
    
    render(){
	const {chat} = this.props;
	return (
	    <div className="chat" >
	      {chat.map((item,i)=>this.drawItem(item,i))}

		<input
		     onChange={this.handleChange}
		     value={this.state.message}
		     name="message"
		     onKeyPress={this.handleKeyPress}
		     className="input" type="text"/>

	    </div>
	);
    }
};

function mapStateToProps(state){
    const {authentication,chat} = state;
    return {
	authentication,chat
    };
}

const connectedChat = connect(mapStateToProps)(Chat);

export { connectedChat as Chat };
