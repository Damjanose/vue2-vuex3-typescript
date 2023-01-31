<template>
  <base-container title="Register">
    <input placeholder="register" type="text" v-model="registerValue" />
  </base-container>
</template>

<script>
  import BaseContainer from "@/components/BaseContainer.vue";

  export default {
    components: {
      BaseContainer,
    },
    computed: {
      registerValue: {
        get() {
          return this.$store.getters.registerValue
        },
        set(text) {
          this.$store.dispatch('setRegisterValue', text)
        },
      },
    },
  }
</script>