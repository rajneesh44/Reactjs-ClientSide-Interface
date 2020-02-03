import React, { Component } from 'react';
import fire from './config/fire';
import Webcam from "react-webcam";
 
const WebcamComponent = () => <Webcam />;

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div >
                <h1>You are home</h1>
                <Webcam
                    audio={false}
                    height={720}
                    // ref={webcamRef}
                    // screenshotFormat="image/jpeg"
                    // width={1280}
                    // videoConstraints={videoConstraints}
      />
                <button onClick={this.logout}>Logout</button>
            </div>
            );
    }
}

export default Home;
