import firebase from 'firebase';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBo_erIYIPMkQ9ZdsXXSda8dNgW2Kv49zA",
    authDomain: "booking-dashboard.firebaseapp.com",
    databaseURL: "https://booking-dashboard.firebaseio.com",
    projectId: "booking-dashboard",
    storageBucket: "booking-dashboard.appspot.com",
    messagingSenderId: "1003599615966",
    appId: "1:1003599615966:web:1a2c183a457fa4ad99ef4f",
    measurementId: "G-QKE4ZZ2YNM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
export default firebase
