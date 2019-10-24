let nextTodoId = 4;

export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: nextTodoId += 1,
  text,
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id,
});
