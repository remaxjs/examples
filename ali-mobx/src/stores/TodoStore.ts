let id = 5;

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const createStore = () => ({
  todos: [
    { id: 1, text: 'Learning JavaScript', completed: true },
    { id: 2, text: 'Learning ES6', completed: true },
    { id: 3, text: 'Learning React Native', completed: true },
    { id: 4, text: 'Learning Remax', completed: false }
  ] as Todo[],

  addTodo(text: string) {
    this.todos.push({
      id: id++,
      text,
      completed: false
    });
  },

  toggleTodo(id: number) {
    const todo = this.todos.find(todo => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed;
    }
  }
});

export default createStore;
