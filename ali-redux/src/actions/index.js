let nextTodoId = 4;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
