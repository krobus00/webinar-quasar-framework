export function getTodo(state) {
  return state.todos;
}
export function getOnGoingTodo(state) {
  return state.todos.filter(todo => {
    return todo.checked === false;
  });
}
export function getCompleteTodo(state) {
  return state.todos.filter(todo => {
    return todo.checked === true;
  });
}
