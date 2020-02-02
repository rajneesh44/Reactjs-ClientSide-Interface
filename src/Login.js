import React, { Component } from 'react';
import { Link, BrowserRouter, MemoryRouter, Router} from 'react-router-dom';
import fire from './config/fire';
import Signup from './Signup';


class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email:' ',
            password:' ',
        }
  
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


      handleFormReset = () => {
        this.setState({ email: ' ', password:' ' })
      }

      handleButtonClick = () => {
        this.form.reset() // resets "username" field to "admin"
      }

    render(){
        return(
            <div>
                <form>
                    <div class= "form-group">
                        <h1>AMS-ZHCET</h1>
                        {/* <label for="exampleInputEmail"> Email address</label> */}
                        <input value ={this.state.email} onChange={this.handleChange} type="email" name="email"
                        class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" value={this.state.email}/>
                        
                    </div>

                    <div class= "form-group">
                        {/* <label for="exampleInputPassword"> Password</label> */}
                        <input value ={this.state.password} onChange={this.handleChange} type="password" name="password"
                        class="form-control" id="exampleInputPassword" placeholder="Password" value={this.state.password}/>
                      
                    </div>
                    <button type = "submit" onClick={this.login} class= "primary">Login</button>
                    
                    <button onClick={this.signup} class="success">SignUp</button>  
                    {/* <button onClick={this.handleButtonClick}>Reset</button>                                           */}
                    {/* <Link to={'/Signup'}>
                        <button > Click Me </button>
                    </Link>
                   
                 
                    

                    {/* <BrowserRouter>
                        <button><Link to='/Signup' target='./Signup'> Click Me  </Link></button>
                    </BrowserRouter> */}
                       <BrowserRouter>
                       <Link to="/Signup.js">signup</Link>
                     </BrowserRouter>
                    
                </form>
            </div>
        );
    }
}

export default Login;




// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import fire from './config/fire';

// class Login extends Component {
// 	constructor(props) {
// 		super(props);
//         this.login=this.login.bind(this);
//         this.handleChange=this.handleChange.bind(this);
// 		this.state = {
// 			email: '',
// 			password: ''
// 		};

// 		this.update = this.update.bind(this);

// 		this.displayLogin = this.displayLogin.bind(this);
// 	}

    
//     login(e){
//         e.preventDefault();
//         fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
//         }).catch((error) => {
//             console.log(error);
//         });
//     }
//     signup(e){
//         e.preventDefault();
//         fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
//             console.log(error);
//         });
//     }


//     handleChange(e) {
//         this.setState({[e.target.name]: e.target.value});
//     }


// 	update(e) {
// 		let name = e.target.name;
// 		let value = e.target.value;
// 		this.setState({
// 			[name]: value
// 		});
// 	}

// 	displayLogin(e) {
// 		e.preventDefault();
// 		console.log('You are logged in');
// 		console.log(this.state);
// 		this.setState({
// 			email: '',
// 			password: ''
// 		});
// 	}

// 	render() {
// 		return (
// 			<div className="login">
// 				<form onSubmit={this.displayLogin}>
// 					<h2>Login</h2>
// 					<div className="username">
// 						<input
// 							type="text"
// 							placeholder="Username..."
// 							value={this.state.email}
// 							onChange={this.update}
// 							name="email"
// 						/>
// 					</div>

// 					<div className="password">
// 						<input
// 							type="password"
// 							placeholder="Password..."
// 							value={this.state.password}
// 							onChange={this.update}
// 							name="password"
// 						/>
// 					</div>
//                     {/* <button class="button" type = "submit" onClick={this.login}>Login</button> */}
                    
// 					<input type="submit" value="Login"onClick={this.login} />
// 				</form>

// 				{/* <Link to="/register">Create an account</Link> */}
// 			</div>
// 		);
// 	}
// }

// export default Login;
