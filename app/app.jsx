var React = require('react');
var ReactDOM = require('react-dom');
//This is exactly the same below, creating new variable Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');// all the properties we wanna pull off
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());
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

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
