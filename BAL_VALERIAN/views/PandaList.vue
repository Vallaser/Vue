<template>
  <div class="book-list">
    <h1>Liste des Panda</h1>
    <table class="table">
      <button
          type="button"
          @click="goToList"
      >
        Recharger
      </button>
      <tr>
        <th>Id</th>
        <th>Nom</th>
        <th>Age</th>
        <th>Poids</th>
        <th>Sexe</th>
        <th>Adoptable ?</th>
        <th>Action</th>
      </tr>
      <tr v-for="panda in pandas" :key="panda.id">
        <td>{{panda.id}}</td>
        <td>{{panda.name}}</td>
        <td>{{panda.weight}}</td>
        <td>{{panda.availableForAdoption | adoptable }}</td>
        <td>
          <button
              type="button"
              @click="updatePanda(panda)"
          >
            Modifier
          </button>
          <button
              type="button"
              @click="deletePanda(panda)"
          >
            Supprimer
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PandaApi from "../api/panda";

export default {
  name: "PandaList",
  data() {
    return {
      pandas: []
    };
  },
  computed: {
    ...mapGetters({
      owner: "getOwner"
    })
  },
  methods: {
    goToList() { //permet de rafraîchir la page
      this.$router.push('/');
    },
    updatePanda(panda) { //permet d'aller vers le formulaire pour modifier un panda
      this.$router.push({ name: 'PandaForm', params: { id: panda.id } });
    },
    async getPandas() {
      try {
        const response = await PandaApi.getPandas(this.owner);
        this.pandas = response.body.content;
      } catch (error) {

        console.error('Une erreur est survenue lors de la récupération des panda');
      }
    },
    async deletePanda(panda) { //permet de supprimer un panda
      try {
        await PandaApi.removePanda(panda.id, this.owner);
        await this.getPandas();
      } catch (error) {
        console.error('Impossible de supprimer le panda : ', panda);
      }
    }
  },
  filters: { //permet de dire si un panda est adoptable ou non sous forme utilisateur
    adoptable(value) {
      return `${value}`;
    }
  },
    async mounted() {
      await this.getPandas();
    }
};
</script>

<style lang="scss" scoped>
.book-list {
  text-align: center;
}

.table {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
