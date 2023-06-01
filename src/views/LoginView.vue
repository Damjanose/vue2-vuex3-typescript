<template>
  <base-container title="Login">
    <input placeholder="Type here" type="text" v-model="syncText" />
    <text-field-getter v-model="value" />
    <input-field v-model="value"/> <br />
    Value: {{ value }}
  </base-container>
</template>

<script lang="ts">                                                                              
import {Component, Vue} from "vue-property-decorator";

import TextFieldGetter from "@/components/TextFieldGetter.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import InputField from "@/components/InputField.vue";

@Component({ components: { InputField, BaseContainer, TextFieldGetter } })
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
