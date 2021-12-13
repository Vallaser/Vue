import Vue from 'vue'
const API_BASE_URL = 'http://163.172.53.19:8082/api/panda';

export default class PandaAPI {
    static getPanda(pandaId, owner) { //permet d'obtenir un panda
        return Vue.http.get(`${API_BASE_URL}/${pandaId}`, {
            params: {
                owner
            }
        });
    }
    static getPandas(owner) { //permet d'obtenir la liste des pandas
        return Vue.http.get(`${API_BASE_URL}`,{
            params: {
                owner
            }
        });
    }
    static createPanda(panda, owner) { //permet de créer un panda
        return Vue.http.post(`${API_BASE_URL}?owner=${owner}`, {
            ...panda
        });
    }
    static updatePanda(panda, owner) { //permet de modifier un panda
        return Vue.http.put(`${API_BASE_URL}/${panda.id}?owner=${owner}`, {
            ...panda,
            owner
        });
    }
    static removePanda(pandaId, owner) { //permet de supprimer un panda
        return Vue.http.delete(`${API_BASE_URL}/${pandaId}?owner=${owner}`);
    }
};
