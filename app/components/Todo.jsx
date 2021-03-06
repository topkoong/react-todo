var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export class Todo extends React.Component {
  render () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created '; // if the item is not completed, we use the createdAt date.
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm A');
    };
    return (
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id);
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>

      </div>
    )
  }
};

export default connect()(Todo);
// connect todo component to our store
// module.exports = connect()(Todo);
