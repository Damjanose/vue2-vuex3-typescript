<template>
    <input placeholder="Type here" type="text" v-model="syncValue" />
</template>
<script lang="ts">
import {Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class InputField extends Vue {
  @Prop() value!: string

  get syncValue() {
    return this.value
  }
  set syncValue(value) {
    this.$emit('input', value)
  }
}
</script>
