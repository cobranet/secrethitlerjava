import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

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
    constructor(props){
	super(props);
	const {dispatch} = this.props;
    }
    render() {
	const {alert} = this.props;
	return (
	    <div className="app">
              { alert.message &&
		  <div className="paper">
			<div className={`alert ${alert.type}`}>{alert.message}</div>
		      </div>
                  }
		  <div>Secret Hitler</div>
            </div>
	);
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 


