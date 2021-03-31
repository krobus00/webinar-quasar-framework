<template>
  <q-item tag="label" v-ripple>
    <q-item-section side top>
      <q-checkbox v-model="isChecked" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ description }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn @click="remove" color="red" flat dense round icon="delete" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "Item",
  computed: {
    isChecked: {
      get() {
        return this.checked;
      },
      set(value) {
        this.$store.dispatch("todo/toggleCheck", this.title);
      },
    },
  },
  methods: {
    remove() {
      this.$store.dispatch("todo/removeTask", this.title);
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
