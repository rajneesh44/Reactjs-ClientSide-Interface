import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import fire from './config/fire';
import Login from './Login';
import Home from './Home';

// function App() {
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
    <div className="App">
     {this.state.user ? (<Home />) : (<Login/>)}
    </div>
  );
}
}

export default App;


//part under main divs

 /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload and yes do one thing.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */