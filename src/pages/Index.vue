<template>
  <q-page class="flex flex-center">
    <q-dialog v-model="modal">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add new todo</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-input
            outlined
            v-model="title"
            label="Title"
            :rules="[(val) => !!val || '* Required']"
          />
          <q-input
            class="q-mt-md"
            outlined
            autogrow
            v-model="description"
            type="textarea"
            label="Description"
            :rules="[(val) => !!val || '* Required']"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn @click="addTask" flat>add</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered padding v-if="getOnGoingTodo.length">
        <q-item-label header>Taks</q-item-label>
        <Item v-for="todo in getOnGoingTodo" :key="todo.title" v-bind="todo" />
      </q-list>
      <h2 v-else>Empty</h2>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn @click="modal = true" fab icon="add" color="accent" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import Item from "components/Item.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "PageIndex",
  components: {
    Item,
  },
  data() {
    return {
      modal: false,
      title: "",
      description: "",
    };
  },
  methods: {
    addTask() {
      this.$store
        .dispatch("todo/addTask", {
          title: this.title,
          description: this.description,
        })
        .then((success) => {
          this.$q.notify({
            position: "top-right",
            message: success ? "Sucessful" : "Duplicate title",
            color: success ? "positive" : "negative",
          });
          this.modal = false;
          this.title = "";
          this.description = "";
        });
    },
  },
  computed: {
    ...mapGetters("todo", ["getOnGoingTodo"]),
  },
};
</script>
