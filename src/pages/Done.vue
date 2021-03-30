<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered padding>
        <q-item-label header>Taks</q-item-label>
        <Item v-for="todo in getCompleteTodo" :key="todo.title" v-bind="todo" />
      </q-list>
    </div>
  </q-page>
</template>

<script>
import Item from "components/Item.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Done",
  components: {
    Item,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters("todo", ["getCompleteTodo"]),
  },
};
</script>
