let todoId = 4;
export default {
  namespace: 'todo',

  state: [
    { id: 1, text: 'Learning Javascript', completed: true },
    { id: 2, text: 'Learning ES2016', completed: true },
    { id: 3, text: 'Learning Remax', completed: false },
  ],

  reducers: {
    add(state, action) {
      return [
        ...state,
        {
          id: todoId++,
          text: action.text,
          completed: false,
        },
      ];
    },
    toggle(state, action) {
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    },
  },
};
