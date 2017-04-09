import firebase from 'firebase';
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
var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Theerut',
    age: 25
  }
});

// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('New todo added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'Todo 1'
// });
//
// todosRef.push({
//   text: 'Todo 2'
// });

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo id', newNoteRef.key);


// newNoteRef.set({
//   text: 'Walk the dog'
// });

// set completely wipes the data all the current reference
// firebaseRef.set({
//   appName: 'Todo Application'
// });

// firebaseRef.child('user').set({
//   name: 'Top'
// });
//
// firebaseRef.child('app').set({
//   name: 'Todo App'
// });

// it updates only the first level of property so we need to use multipath to fix this problem
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// it's the same as multipath
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed');
// })

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Top'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Top'
// });

// Either way works the same (Remove)

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// Remove
// firebaseRef.child('user/age').remove();
// firebaseRef.update({
//   isRunning: null
// });

// once method listens and trigers for the value
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key,snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(); // turn off the listener for value
//
// firebaseRef.update({isRunning: false});

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });
//
// // firebaseRef.off();
//
// firebaseRef.child('user').update({name: 'Top'});
// firebaseRef.child('app').update({name: 'Something Else!'});
