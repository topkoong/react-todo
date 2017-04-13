import React from 'react';
import * as Redux from 'react-redux';
// var uuid = require('node-uuid');
// var moment = require('moment');

import TodoList from 'TodoList'
// var TodoList = require('TodoList');
// var AddTodo = require('AddTodo');
import AddTodo from 'AddTodo';
// var TodoSearch = require('TodoSearch');
import TodoSearch from 'TodoSearch';
// var TodoAPI = require('TodoAPI');
import * as actions from 'actions';



export class TodoApp extends React.Component {
  // {
  // getInitialState: function () {
  //   return {
  //     showCompleted: false,
  //     searchText: '',
  //     todos: TodoAPI.getTodos()
  //   };
  // },
  // componentDidUpdate: function () {
  //   TodoAPI.setTodos(this.state.todos);
  // },
  // handleAddTodo: function (text) {
  //   this.setState({
  //     todos: [ // set new array equals to the old one
  //       ...this.state.todos, // keep the old todos array
  //       { // property of new todo item
  //         id: uuid(), // generate random id (we don't need keep track of the previous id was and what the next id should be.)
  //         text: text,
  //         completed: false,
  //         createdAt: moment().unix(), // Store a timestamp
  //         completedAt: undefined
  //       }
  //     ]
  //   });
  // },
  // handleToggle: function (id) {
  //   var updatedTodos = this.state.todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed; // if it's originally fause, it'll be true, and vice versa.
  //       todo.completedAt = todo.completed ? moment().unix() : undefined; // Store a timestamp when completed it
  //     }
  //     return todo;
  //   });
  //   this.setState({todos: updatedTodos});
  // },
  // handleSearch: function (showCompleted, searchText) { // set the state inside of our new handleSearch method
  //   this.setState({
  //     showCompleted: showCompleted,
  //     searchText: searchText.toLowerCase()
  //   });
  // },
  onLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }
  render () {
    // var {todos, showCompleted, searchText} = this.state;
    // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
// <TodoList todos={todos}/> pass in the array
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(TodoApp);
