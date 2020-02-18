import React, { Component } from 'react';
import fire from './config/fire';
import Camera from 'react-camera';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.takePicture = this.takePicture.bind(this);  
    }

    takePicture(){
        this.camera.capture()
        .then(blob=>{
            this.img.src = URL.createObjectURL(blob);
            this.img.onload = () => {URL.revokeObjectURL(this.src);}
        })
        console.log(this.img);
    }

    logout() {
        fire.auth().signOut();
    }
    
    render() {
               
        return (
            <div >
                <h1 style={{color:'white'}}>You are home</h1>
               
        <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}>
          
          <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
          </div>
        </Camera>
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />
   
            <button class ="primary" onClick={this.logout.bind(this) }>click</button>
               
            </div>
            );
    }
}

export default Home;


const style = {
    preview: {
      position: 'relative',
    },
    captureContainer: {
      display: 'flex',
      position: 'absolute',
      justifyContent: 'center',
      zIndex: 1,
      bottom: 0,
      width: '100%'
    },
    captureButton: {
      backgroundColor: '#fff',
      borderRadius: '50%',
      height: 56,
      width: 56,
      color: '#000',
      margin: 20
    },
    captureImage: {
      width: '100%',
    }
  };