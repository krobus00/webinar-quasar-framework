<template>
  <q-card class="my-card">
    <q-card-section class="text-black">
      <div class="text-h6">{{ provinsi }}</div>
      <!-- <div class="text-subtitle2">by John Doe</div> -->
    </q-card-section>

    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="coronavirus" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Positif</q-item-label>
          <q-item-label caption>{{ positif }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="green" name="health_and_safety" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Sembuh</q-item-label>
          <q-item-label caption>{{ sembuh }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="red" name="mood_bad" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Meninggal</q-item-label>
          <q-item-label caption>{{ meninggal }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {};
  },
  props: {
    provinsi: {
      type: String,
      default: "",
    },
    positif: {
      type: Number,
      default: 0,
    },
    sembuh: {
      type: Number,
      default: 0,
    },
    meninggal: {
      type: Number,
      default: 0,
    },
  },
};
</script>
