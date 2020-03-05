import firebase from 'firebase';
  /** Tan firebase keys for testing **/

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

/** Reza firebase keys for testing**/

//   var firebaseConfig = {
//   apiKey: "AIzaSyC5QzvKODt7UK0Zif-GdLY67dojDOBkYQg",
//   authDomain: "booking-dashboard-eabf7.firebaseapp.com",
//   databaseURL: "https://booking-dashboard-eabf7.firebaseio.com",
//   projectId: "booking-dashboard-eabf7",
//   storageBucket: "booking-dashboard-eabf7.appspot.com",
//   messagingSenderId: "18558792269",
//   appId: "1:18558792269:web:d3679578aa921980c26204"
// };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  const databaseRef = firebase.database().ref();
  export const firebaseRef = databaseRef.child("bookings")
//export default firebase
