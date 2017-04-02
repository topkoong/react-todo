var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props; // pull the todos props off of this.props
    var renderTodos = () => { // define new render function
      // Inside todolist for every item in the todos array, we render a new todo component
      return todos.map((todo) => { // return new piece of jsx that's gonna get rendered to the screen
        //{...todo} using the spread operator lets you spread out all the properties on the object into individual prop
        return (
          <Todo key={todo.id} {...todo}/>
        )
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
