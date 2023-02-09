<template>
  <base-container title="Register">
    <input placeholder="register" type="text" v-model="registerValue" />
    <text-field v-model="registerValue"/>
  </base-container>
</template>

<script>
  import BaseContainer from "@/components/BaseContainer.vue";
  import TextField from "@/components/TextField.vue";

  export default {
    components: {
      TextField,
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