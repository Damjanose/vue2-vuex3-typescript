<template>
    <input placeholder="Type here" type="text" v-model="syncValue" />
</template>
<script lang="ts">
import {Component, Vue } from "vue-property-decorator";

@Component
export default class InputField extends Vue{

  value = ''
  get syncValue() {
    return this.value
  }
  set syncValue(value) {
    this.$emit('input', value)
  }
}
</script>
