<template>
  <div>
    <div id="app">
      <h1>Jak ti můžeme pomoci?</h1>
      <p class="intro">
        Nenašel jsi ve výběru aktivitu, kterou preferuješ?
        Chceš si něco vyfiltrovat a nemůžeš?
        <br>Tak nám pomoz to zlepšit.</p>


    <contactform />
    </div>

  </div>
</template>

<script>
  import ContactForm from './../components/ContactForm.vue'

  export default {
    components: {
      "contactform": ContactForm
    }
  }
</script>

<style scoped>
  #app {
    text-align: center;
  }
</style>