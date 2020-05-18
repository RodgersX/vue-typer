<template>
  <div id="app">
    sdjoscnso
    <vue-typer
    style="font-size: 50px;"
    :text="['Design','Development','Innovation','Storytelling']"
    :pre-type-delay="50"
    :type-delay="40"
    :shuffle="true"
    carret-animation="blink"></vue-typer>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'app',
  components: {
    'vue-typer': VueTyper
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
