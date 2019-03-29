import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user';
import './login.css';
import '../main.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
	
        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false,
	    
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }
    
    handleSignin=(e)=>{
	e.preventDefault();
	this.setState({submitted: true});
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.register({email:email, password:password}));
        }
	
    }

    render() {
        const { email, password, submitted } = this.state;
        return (
            <div className="main box">
                <h2>Login</h2>
                <form name="form" >
                    <div className={'fgroup' + (submitted && ! email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} 
                        placeholder={submitted && !email ? 
				     'Username is required' : ''
                        } />
                    </div>
                    <div className={'fgroup' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} 
			placeholder= {submitted && !password ?
				      'Password is required' : ''
                        } />
                    </div>
                    <div className="fgroup">

                      <button onClick={this.handleSubmit} className=" button pure-material-button-contained">Login</button>
		      <button onClick={this.handleSignin} className=" button pure-material-button-contained">Register</button>                        
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login }; 
