<template>
  <base-container title="Login">
    <input placeholder="Type here" type="text" v-model.lazy="syncText" />
  </base-container>
</template>

<script>
  import BaseContainer from "@/components/BaseContainer.vue";

  export default {
    components: {
      BaseContainer,
    },
    computed: {
      syncText: {
        get() {
          return this.$store.getters.text
        },
        set(text) {
          this.$store.dispatch('setText', text)
        },
      },
    },
  }
</script>
