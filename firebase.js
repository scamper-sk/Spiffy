
const firebaseConfig = {
    apiKey: "AIzaSyA7JygDyDy268237DGvTXEtgygibMdoVBY",
    authDomain: "spiffy-15281.firebaseapp.com",
    projectId: "spiffy-15281",
    storageBucket: "spiffy-15281.appspot.com",
    messagingSenderId: "1000312744178",
    appId: "1:1000312744178:web:a13ab07b41fbdb1e08886b",
    measurementId: "G-17Q6XSY8HD"
  };

  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 //this will make variable db available to whole index.html or whole script .
 //initialize an instance of cloud firestore
  var db = firebase.firestore();

