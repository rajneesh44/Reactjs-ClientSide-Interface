import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import fire from './config/fire';
import Login from './Login';
import Home from './Home';

class App extends Component{

  constructor(props){
    super(props);
    this.state= {
      user: {},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
     // console.log(user);
      if(user){
        this.setState({user});
     //   localStorage.setItem('user', user.uid);
      }
      else{
        this.setState({user:null});
     //   localStorage.removeItem('user');
      }
    });
  }
render(){
  return (
    <div className="container" style={{backgroundColor: '#282c34'}}>
     {this.state.user ? (<Home />) : (<Login/>)}
    </div>
  );
}
}

export default App;

  

// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import Login from './Login';
// // import Register from '.S';
// // import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Route exact path="/" component={Login} />
//         {/* <Route path="/register" component={Register} /> */}
//       </div>
//     );
//   }
// }

// export default App;