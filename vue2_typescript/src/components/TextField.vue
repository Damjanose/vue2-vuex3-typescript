<template>
  <div>
    <input type="text" :value="value" @input="updateValue" />
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: ['value'],
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  },
}
</script>