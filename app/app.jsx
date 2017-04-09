var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
//This is exactly the same below, creating new variable Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');// all the properties we wanna pull off
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// import './../playground/firebase/index';

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', store.getState());

  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));


// loading CSS (foundation)
require('style!css!foundation-sites/dist/css/foundation.min.css'); // css!, meaning we use css loader that we installed
// we still need to inject css to html so the style actually shows up by adding style loader first.
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');



// var obj = {
//   name: 'Top'
// };
// If I wanna pull out the name, I can use destructuring like this.
//var {name} = obj; // This creates a new variable called name and sets it to equal to whatever obj.name equals to.

//TodoApp and its children can access to the store
ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
