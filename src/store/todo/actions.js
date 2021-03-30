export function addTask(context, payload) {
  let duplicate = context.state.todos.some(v => v.title === payload.title);
  if (!duplicate) {
    payload.checked = false;
    context.commit("addTaks", payload);
    return true;
  }
  return false;
}
