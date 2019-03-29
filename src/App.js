import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from './components/login';
import './App.css';
import {Chat} from './components/chat';
import {Connector} from './components/connector';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSmile,
	 faBone,
	 faArrowAltCircleRight,
	 faSkull,
	 faBolt,
	 faQuestionCircle,
	 faFrown
       } from '@fortawesome/free-solid-svg-icons';

library.add(fab,
	    faSmile,
	    faBone,
	    faArrowAltCircleRight,
	    faSkull,
	    faBolt,
	    faFrown,
	    faQuestionCircle,
);


class App extends Component {
    
    render() {
	const {alert, authentication} = this.props;
	return (
	    <div className="app">
              { alert.message &&
		  <div className="paper">
			<div className={`alert ${alert.type}`}>{alert.message}</div>
		      </div>
                  }
		  
		  { authentication.loggedIn ? null: <Login/> }
		  { authentication.loggedIn ? <Connector/> : null }
		  { authentication.loggedIn ? <Chat/> : null }
		  
            </div>
	);
    }
}

function mapStateToProps(state) {
    const { alert,authentication } = state;
    return {
        alert,
	authentication,
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 


