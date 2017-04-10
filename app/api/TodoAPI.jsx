var $ = require('jquery');

module.exports = {
  // setTodos: function (todos) {
  //   if ($.isArray(todos)) { //check if the value pass in is an array
  //     localStorage.setItem('todos', JSON.stringify(todos)); // json takes array and converts to string
  //     return todos;
  //   }
  // },
  // getTodos: function () {
  //   var stringTodos = localStorage.getItem('todos');
  //   var todos = [];
  //   try {
  //     // JSON.parse convert strings back into array
  //     todos = JSON.parse(stringTodos);
  //   } catch (e) {
  //
  //   }
  //   return $.isArray(todos) ? todos : [];
  // },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => { // call individual item todo, filter is a builtin function of array
      // if the item isn't completed, we wanna show it by default.
      // However, if the todo's completed status is false, it'll return true and that item will stay on the array
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      // If the searchText.length === 0, it means we want to return every single item.
      // If text.indexOf(searchText) > -1, checking if the text is inside,
      // it will return -1 if it wasn't found or return 0 if it was found
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (a.completed && b.completed ) {
        return -1; // a should come before b
      } else if (a.completed && !b.completed) {
        return 1; // a should come after b because a is completed, but b isn't
      } else {
        return 0; // a equals to b, meaning no reason to sort them
      }
    });
    return filteredTodos;
  }
};
