import React from 'react';
import API from '../../apis/api';
import { connect } from 'react-redux'
import { getUser } from '../../redux/actions'

class Login extends React.Component { 

	constructor(props) { 
		super(props);
		this.username = React.createRef();
		this.password = React.createRef();
		this.state = {
			loading: false,
			invalidLogin: false,
		}
	}

	handleSubmit = async (e) => { 
		
        e.preventDefault(); 
		
		let usernameEntered = this.username.current.value;
		let passwordEntered = this.password.current.value;
		this.setState({loading:true})
		const response = await API.get(`/users?username=${usernameEntered}`)
			.catch((err) => {
				this.setState({ loading: false, invalidLogin: true });		   
			});
        
		if (response) { 
			if (response.data.length === 0) { 
				this.setState({invalidLogin:true,loading:false})
			} else if (response.data.length > 0) { 
				
				let { username, password } = response.data[0];
				
				if (username === usernameEntered && password === passwordEntered) {		
					this.setState({loading:false,invalidLogin:false})
					this.props.history.push('/results');
					this.props.getUser(response.data[0]);
				}
				else { 
					this.setState({invalidLogin:true,loading:false})
				}
			}
		}		
	}
	
	
   
    render() { 
    return(
        <section className="login-holder">
      	   <h2>Welcome</h2>
            <p>
                <b>Register or sign in to view and purchase<br/>amazing products.</b>
            </p>
            <form onSubmit={this.handleSubmit}>
      	   	<div className="action-selectors">
      	   	   <button type="button" className="active">Sign In</button>
      	   	   <button type="button" disabled title="coming soon">Register</button>
      	   	</div>   
				<div className="form-fields">
					{
					  this.state.invalidLogin?<p className="error-message">Username or password entered is incorrect</p>:null
					}
					
      	   		 <div>
      	   		 	<label>Username</label>
						<input type="text" name="username" ref={this.username} required/>
      	   		 </div>

      	   		 <div>
      	   		 	<label>Password</label>
						<input type="text" name="password" ref={this.password} required/>
      	   		 </div>

					<button type="submit" className="submit-button">
						{this.state.loading?'Please wait..':'Sign In'}
					  </button>
      	   	</div>	
      	   </form>
      </section>
    )
}

}
export default connect(null, {getUser})(Login);