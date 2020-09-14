import React, {Component} from "react";
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state={
        redirect: false
    }

    redirect = () =>{
        this.setState({redirect: true})
    }
    render() {
        
        if (this.state.redirect){
            return( <Redirect to="/notes" /> )
        } else {
        return(
            <form onSubmit={this.redirect} className="ui form">
                Name: <input type="text"></input><br/>
                Password: <input type="text"></input><br/>
                <input type="submit" />
            </form>
        )}
    }
}

export default Login;