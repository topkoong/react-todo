var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false // if a task is not completed
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }, {
          id: uuid(),
          text: 'Leave mail on porch',
          completed: true
        }, {
          id: uuid(),
          text: 'Play video games',
          completed: false
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [ // set new array equals to the old one
        ...this.state.todos, // keep the old todos array
        { // property of new todo item
          id: uuid(), // generate random id (we don't need keep track of the previous id was and what the next id should be.)
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed; // if it's originally fause, it'll be true, and vice versa.
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText) { // set the state inside of our new handleSearch method
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
// <TodoList todos={todos}/> pass in the array
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
