// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import fire from './config/fire';

// class Signup extends Component {
//     constructor(props){
//         super(props);
//         this.login=this.login.bind(this);
//         this.handleChange=this.handleChange.bind(this);
//         this.signup = this.signup.bind(this);
//         this.state={
//             email:'',
//             password:''
//         }
//     }

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

//     render(){
//         return(
//             <div className = "col-md-6">
//                 <h1>Hey this is sign up page</h1>
//                 <form>
//                     <div class= "form-group">
                            
//                         <label for="exampleInputEmail"> Email address</label>
//                         <input value ={this.state.email} onChange={this.handleChange} type="email" name="email"
//                         class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
//                         placeholder="Enter email" />
//                         <small id = "emailHelp" class ="form-text text-muted"> We'll neever share your email woth anyone else.</small>

//                     </div>

//                     {/* <div class= "form-group">
//                         <label for="exampleInputPassword"> Password</label>
//                         <input value ={this.state.password} onChange={this.handleChange} type="password" name="password"
//                         class="form-control" id="exampleInputPassword1" placeholder="Password" />
//                         <small id = "emailHelp" class ="form-text text-muted"> We'll neever share your email woth anyone else.</small>
//                     </div>
//                     {/* <button type = "submit" onClick={this.login} class= "btn btn-primary">Login</button> */}
//                     {/* <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">SignUp</button>                                             */} */}
//                 </form>
                
//             </div>
//         );
//     }
// }

// export default Signup;


import React, { Component } from 'react';
import fire from './config/fire';

class Signup extends Component {
    // constructor(props) {
    //     super(props);
    //     this.logout = this.logout.bind(this);
    // }

    render() {
        return (
            <div className="col-md-6">
                <h1>sign up page</h1>
               
            </div>
            );
    }
}

export default Signup;
