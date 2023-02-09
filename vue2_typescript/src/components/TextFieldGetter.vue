<template>
  <input type="text" v-model="filterText" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TextFieldGetter extends Vue {
  private filter: any = ''

  get filterText(): string {
    this.filter = localStorage.getItem('loginText')
    return this.filter;
  }
   set filterText(filter: string) {
    this.filter = localStorage.setItem('loginText', filter)
  }

}

</script>