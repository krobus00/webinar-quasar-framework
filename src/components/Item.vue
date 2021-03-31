<template>
  <q-item tag="label" v-ripple>
    <q-item-section side top>
      <q-checkbox :value="checked" @input="toggleCheck(title)"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ description }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn @click="removeTask(title)" color="red" flat dense round icon="delete"/>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Item",
  methods: {
    ...mapActions("todo", ["toggleCheck", "removeTask"])
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  }
};
</script>
