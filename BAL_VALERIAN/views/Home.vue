<template>
  <div class="home">
    <router-view/>
    <div slot="footer">Mon footer</div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
    },
    methods: {
      recupFromMyStore(nom, prenom) {
        this.$store.getters('GET_NOM', this.nom);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .home {
    text-align: center;
  }
  .martine {
    width: 10%;
  }
</style>
