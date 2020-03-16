import React, { Component } from 'react';
import fire from './config/fire';
import Camera from 'react-camera';
import axios from 'axios';

class Home extends Component {
  enableCamera=() =>this.setState({CameraEnabled:true})


    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.takePicture = this.takePicture.bind(this);  
        this.state ={CameraEnabled: false}
    }
    // state={
    //   selectedFile:null
    // }
    // fileSelectedHandler = event=>{
    //   this.setState({
    //     selectedFile:event.target.files[0]
    //   })
    // }

    fileUploadHandler=(img)=>{
      const fd = new FormData();
      console.log("hey",img)
      fd.append('image',img)
      axios.post(' https://cors-anywhere.herokuapp.com/http://127.0.0.1:5000/file/',fd)
      .then(res=>{
        console.log(res)
      })
    }

    takePicture(){
        this.camera.capture()
        .then(blob=>{
            this.img.src = URL.createObjectURL(blob);
            this.img.onload = () => {URL.revokeObjectURL(this.src);}
        })
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
               
        return (
            <div >
              <div>
                <h1 class = "blinking">Attendance Page</h1>
               
                <button type = "submit" class= "primary1">Create User/Registration</button>
                <button type = "submit" class= "primary1">View Attendance</button>
                <button type = "submit" class= "primary1" style={{marginleft:300}} onClick={this.logout.bind(this)}>Logout</button>
                <button type = "submit" class= "primary1" onClick={this.disableCamera}>disableCamera</button>)
               </div>
          <div>
            
            {this.state.CameraEnabled ?  
       ( <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
          <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
          </div>
        </Camera>) : ( <button type = "submit" class= "primary1" onClick={this.enableCamera}>Mark attendance</button>)}
       </div>
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
            console.image(img)
          }}
        />


            <button type="submit" class = "primary" onClick={this.fileUploadHandler(this.img)}>Send</button>
               
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
      width: '80%',
      borderRadius: '20%'
    },
    captureButton: {
      backgroundColor: 'white',
      borderRadius: '50%',
      height: 56,
      width: 56,
      color: '#000',
      margin: 70,
    },
    captureImage: {
      width: '100%',
    }
  };