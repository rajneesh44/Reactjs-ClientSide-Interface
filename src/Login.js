import React, { Component } from 'react';
import { Link, BrowserRouter} from 'react-router-dom';
import fire from './config/fire';
import Signup from './Signup';
import zh from './assets/zh.jpg';

const GOOGLE_BUTTON_ID = 'google-sign-in-button';
class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email:' ',
            password:' ',
            color:'blue',
        }
    }

    handleChangeColor=(newColor)=>{
        this.setState({
            color:newColor
        })

       
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
        }).catch((error) => {
            console.log(error);
        });
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log(error);
        });
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    componentDidMount() {
        this.timer=setTimeout(
        ()=> this.handleChangeColor('red'),1000*1)

          window.gapi.signin2.render(
            GOOGLE_BUTTON_ID,
            {
              width: 130,
              height: 50,
              onsuccess: this.login,
              theme:'dark',
            },
          );
        }

    render(){
        return(

           <div class="container"> 
               <div class = "pic-div"> 
               <img src={zh} class="pic" alt="zhcet-logo" />   
                </div>
                <form>
                    <div class= "form-group">
                        {/* <h1 style={{color:this.state.color}}>AMS-ZHCET</h1> */}
                        <h1 class = "blinking">AMS-ZHCET</h1>
                        {/* <label for="exampleInputEmail"> Email address</label> */}
                        <input value ={this.state.email} onChange={this.handleChange} type="email" name="email"
                        class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" value={this.state.email} required/>
                        
                    </div>

                    <div class= "form-group">
                        {/* <label for="exampleInputPassword"> Password</label> */}
                        <input value ={this.state.password} onChange={this.handleChange} type="password" name="password"
                        class="form-control" id="exampleInputPassword" placeholder="Password" value={this.state.password} required/>
                      
                    </div>
                    <button type = "submit" onClick={this.login} class= "primary">Login</button>
                    <button onClick={this.signup} class="success">SignUp</button>  
                    <h5>Or signIn using</h5> <div id={GOOGLE_BUTTON_ID} />
                    {/* adding google sign in button */}
                   
                    
                </form>
                <h3>Developed by: <a href="https://github.com/rajneesh44">Rajneesh Sharma</a> | <a href="https://github.com/Bhanups123">Bhanu Pratap Singh</a></h3>
            </div>
        );
    }
}

export default Login;