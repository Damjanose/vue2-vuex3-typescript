<template>
  <base-container title="Login">
    <input placeholder="Type here" type="text" v-model="syncText" />
    <text-field-getter v-model="value" />
    <NewTextField />
    <br />
    {{ value }}
  </base-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

  import BaseContainer from "@/components/BaseContainer.vue";
  import TextFieldGetter from "@/components/TextFieldGetter.vue";
  import NewTextField from "@/components/NewTextField.vue";

@Component({ components: { BaseContainer, TextFieldGetter, NewTextField } })
export default class LoginView extends Vue{
  value = ''
  get syncText() {
    return this.$store.getters.text
  }
  set syncText(text) {
    this.$store.dispatch('setText', text)
  }
}
</script>
