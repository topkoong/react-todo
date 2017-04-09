import firebase from 'firebase';
try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTon5nHjjyKxFFaYvTgi20w-AhR_QgTQ8",
    authDomain: "theeruttop-todo-app.firebaseapp.com",
    databaseURL: "https://theeruttop-todo-app.firebaseio.com",
    projectId: "theeruttop-todo-app",
    storageBucket: "theeruttop-todo-app.appspot.com",
    messagingSenderId: "209184334355"
  };
  firebase.initializeApp(config);
} catch (e) {

}
export var firebaseRef = firebase.database().ref();
export default firebase;
