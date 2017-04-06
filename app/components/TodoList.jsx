var React = require('react');
var {connect} = require('react-redux'); // let our component access state properties and dispatch methods
import Todo from 'Todo';
// var Todo = require('Todo');

export var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props; // pull the todos props off of this.props
    var renderTodos = () => { // define new render function
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      // Inside todolist for every item in the todos array, we render a new todo component
      return todos.map((todo) => { // return new piece of jsx that's gonna get rendered to the screen
        //{...todo} using the spread operator lets you spread out all the properties on the object into individual prop
        return (
          <Todo key={todo.id} {...todo} />
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

export default connect(
  (state) => { //completeState as well as searchtext value
    return  {
      todos: state.todos // we only access todo arrays
    };
  }
)(TodoList);
