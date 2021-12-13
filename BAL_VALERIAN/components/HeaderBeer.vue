<template>
  <div>
    <router-link :to="{path: '/'}">
      Liste des pandas
    </router-link>
    <router-link :to="{name: 'PandaForm', params: {id: 0}}">
      Ajouter un panda
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderPanda'
};
</script>

<style scoped>

</style>
