<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row cols="1" cols-sm="3" cols-md="3">
        <b-col v-for="(personaje, index) in personajes" :key="index" class="py-2">
          <Card :personaje="personaje" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {};
  },
  computed: {
    personajes() {
      return this.$store.state.characters;
    },
  },

  mounted() {
    this.$store.dispatch("getPersonajes");
  },
};
</script>
