const initialState = [
  { id: 1, text: 'Learning Javascript', completed: true },
  { id: 2, text: 'Learning ES2016', completed: true },
  { id: 3, text: 'Learning Remax', completed: false },
];

const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

export default todos;
