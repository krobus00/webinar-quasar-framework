export function addTask(context, payload) {
  let duplicate = context.state.todos.some(v => v.title === payload.title);
  if (!duplicate) {
    payload.checked = false;
    context.commit("addTaks", payload);
    return true;
  }
  return false;
}

export function toggleCheck(context, payload) {
  let index = context.state.todos.findIndex(x => x.title === payload);
  context.commit("toggleCheckTask", index);
}
export function removeTask(context, payload) {
  let index = context.state.todos.findIndex(x => x.title === payload);
  context.commit("removeTask", index);
}
