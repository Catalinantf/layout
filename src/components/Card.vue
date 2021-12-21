<template>
  <b-card
    :title="personaje.name"
    :img-src="personaje.image"
    :img-alt="personaje.name"
    img-top
  >
  </b-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    personaje: { type: Object },
  },
};
</script>
