export function addTaks(state, newTask) {
  state.todos.push(newTask);
}
export function toggleCheckTask(state, index) {
  state.todos[index].checked = !state.todos[index].checked;
}

export function removeTask(state, index) {
  state.todos.splice(index, 1);
}
