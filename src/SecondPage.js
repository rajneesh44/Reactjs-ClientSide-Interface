import React, { Component } from 'react';
import fire from './config/fire';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom'
import Home from './Home';


class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
       }

    logout() {
        fire.auth().signOut();
    }
    
    render() {
               
        return (
        <div>
            <Particles /> 
            <div
             style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
             }}
             >  
                <h1 style={{color:'white'}}>You are home</h1>
                <li><Link to="/Home">React</Link></li>
                {/* <button class ="second"> </button> */}
                <button class ="primary" onClick={this.logout.bind(this)}>Register Student</button>
                <button class ="primary" onClick={this.logout.bind(this)}>Check Attendance</button>
                <button class ="primary" onClick={this.logout.bind(this)}>Logout</button>
                {/* </div> */}
            </div>
            
        </div>
        );
    }
}

export default SecondPage;