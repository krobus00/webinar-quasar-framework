<template>
  <q-item tag="label" v-ripple>
    <q-item-section side top>
      <q-checkbox v-model="checked" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ description }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "Item",
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
