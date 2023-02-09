<template>
  <base-container title="Login">
    <input placeholder="Type here" type="text" v-model.lazy="syncText" />
    <text-field-getter />
  </base-container>
</template>

<script>
  import BaseContainer from "@/components/BaseContainer.vue";
  import TextFieldGetter from "@/components/TextFieldGetter.vue";

  export default {
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    beforeUnmount() {
      console.log('before Unmount')
    },
    unmounted() {
      console.log('unmounted')
    },
    errorCaptured() {
      console.log('errorCaptured')
    },
    renderTracked() {
      console.log('renderTracked')
    },
    renderTriggered() {
      console.log('renderTriggered')
    },
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    },
    serverPrefetch() {
      console.log('serverPrefetch')
    },
    components: {
      TextFieldGetter,
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
