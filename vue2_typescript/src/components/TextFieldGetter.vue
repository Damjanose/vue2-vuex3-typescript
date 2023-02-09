<template>
  <input type="text" v-model="syncText" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TextFieldGetter extends Vue {
  get syncText() {
    return this.$store.getters.text
  }
  set syncText(text) {
    this.$store.dispatch('setText', text)
  }

}

</script>