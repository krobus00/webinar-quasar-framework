<template>
  <q-page class="flex flex-center">
    <Fab/>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered padding v-if="getCompleteTodo.length">
        <q-item-label header>Taks</q-item-label>
        <Item v-for="todo in getCompleteTodo" :key="todo.title" v-bind="todo"/>
      </q-list>
      <h2 v-else>Empty</h2>
    </div>
  </q-page>
</template>

<script>
import Item from "components/Item.vue";
import Fab from "components/Fab.vue";
import { mapGetters } from "vuex";
export default {
  name: "Done",
  components: {
    Item,
    Fab
  },
  computed: {
    ...mapGetters("todo", ["getCompleteTodo"])
  }
};
</script>
