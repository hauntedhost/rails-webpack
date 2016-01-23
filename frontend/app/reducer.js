const defaultState = {
  inputValue: '',
  todos: []
}

const reducer = (state = defaultState, action) => {
  console.debug('ACTION', action.type, action.payload);

  const todos = [...state.todos];
  switch (action.type) {

  case 'ADD-TODO':
    const newTodo = { note: state.inputValue, completed: false };
    todos.unshift(newTodo);
    return {
      ...state,
      todos: todos,
      inputValue: ''
    };

  case 'REPLACE-TODOS':
    return {
      ...state,
      todos: action.payload
    };

  case 'TOGGLE-TODO':
    const index = action.payload;
    const newCompleted = todos[index].completed ? false : true;
    todos[index].completed = newCompleted;
    return {
      ...state,
      todos: todos
    };

  case 'UPDATE-INPUT':
    return {
      ...state,
      inputValue: action.payload
    };

  default:
    return state
  }
}

export default reducer;
