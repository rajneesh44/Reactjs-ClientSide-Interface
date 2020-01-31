import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCuqcyFYScgCnWAiXXbADdMfZGvC-hWs70",
    authDomain: "webams-724b0.firebaseapp.com",
    databaseURL: "https://webams-724b0.firebaseio.com",
    projectId: "webams-724b0",
    storageBucket: "webams-724b0.appspot.com",
    messagingSenderId: "200661937114",
    appId: "1:200661937114:web:bfd3a035f8965920f12ee3",
    measurementId: "G-C3337Q5WV0"
  };
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
