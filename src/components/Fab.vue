<template>
  <div>
    <q-dialog v-model="modal">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add new todo</div>
          <q-space/>
          <q-btn icon="close" flat round dense v-close-popup/>
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
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn @click="modal = true" fab icon="add" color="accent"/>
    </q-page-sticky>
  </div>
</template>

<script>
export default {
  name: "Fab",
  data() {
    return {
      modal: false,
      title: "",
      description: ""
    };
  },
  methods: {
    addTask() {
      this.$store
        .dispatch("todo/addTask", {
          title: this.title,
          description: this.description
        })
        .then(success => {
          this.$q.notify({
            position: "top-right",
            message: success ? "Sucessful" : "Duplicate title",
            color: success ? "positive" : "negative"
          });
          this.modal = false;
          this.title = "";
          this.description = "";
        });
    }
  }
};
</script>
