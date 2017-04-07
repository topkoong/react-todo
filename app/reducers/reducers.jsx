var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

// showCompletedReducer
export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { // property of new todo item
          id: uuid(), // generate random id (we don't need keep track of the previous id was and what the next id should be.)
          text: action.text,
          completed: false,
          createdAt: moment().unix(), // Store a timestamp
          completedAt: undefined
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          var nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });

    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};
