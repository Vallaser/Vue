<template>
    <div>
        <h1>{{title}}</h1>
      <form @submit.prevent="savePanda">
        <div>
            <div>
                <label>Nom :</label>
                <input type="text" v-model="panda.name"/>
            </div>
          <div v-if="errorMessage.name">
            {{ errorMessage.name }}
          </div>
            <div>
                <label>Disponible à l'adoption :</label>
                <input type="checkbox" v-model="panda.availableForAdoption"/>
            </div>
            <div>
                <label>Poids :</label>
                <input type="number" v-model="panda.weight"/>
            </div>
          <div>
            <label>Age :</label>
            <input type="number" v-model="panda.age"/>
          </div>
          <div>
            <select
                v-model="panda.sex"
                required
            >
              <option
                  v-for="type in pandaSexe"
                  :key="type"
                  :value="type"
              >
                {{ type }}
              </option>
            </select>
          </div>
          <button
              type="button"
              @click="goToList"
          >
            Annuler
          </button>
          <button
              type="submit"
              :disabled="!formIsValid"
          >
            Creer
          </button>
          <p v-if="genericError">
            Une erreur est survenue lors de la création ou de la modification d'un panda.
          </p>
        </div>
      </form>
    </div>
</template>

<script>
    import PandaAPI from "../api/panda";
    import { mapGetters } from "vuex";
    export default {
      name: "PandaForm",
      data() {
        return {
          genericError: false,
          panda: {
            name: '', //nom
            weight: 0, //poids
            sex: 'MALE', //sexe
            age: 0, //age
            id: 0, //identifiant
            owner: '', //propiétaire
            availableForAdoption: false
          },
          pandaSexe: [
            "MALE",
            "FEMELLE",
            "A_DETERMINER",
          ],
          title: "Création d'un Panda",
          errorMessage: {},
          isUpdate: false,
        }
      },
      computed: {
        formIsValid() {
          return this.panda.name !== '';
        },
        ...mapGetters({
          currentBeer: "getCurrentPanda",
          owner: 'getOwner'
        })
      },
      methods: {
        goToList() { //permet de revenir sur la liste des pandas
          this.$store.commit('resetCurrentPanda');
          this.$router.push('/');
        },
        async savePanda() { //permet de sauvegarder un panda
          try {
            if (this.formIsValid) {
              if (this.isUpdate) {
                await PandaAPI.updatePanda(this.panda, this.owner);
              } else {
                PandaAPI.createPanda(this.panda, this.owner);
              }
              this.goToList();
            } else {
              if (this.panda.name === '') {
                this.errorMessage.name = 'Le nom est obligatoire.';
              }
            }
          } catch (error) {
            this.genericError = true;
            console.error('Erreur lors de la création ou la modification d\'un Panda');
          }
        },
        mounted() {
          if (this.$route.params.id && this.$route.params.id !== '' && this.$route.params.id !== 0) {
            this.isUpdate = true;
            this.getPanda(this.$route.params.id);
          }
        }
      }
    }
</script>
