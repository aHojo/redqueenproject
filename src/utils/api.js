import heros from "./heroes.json"
import abilities from "./abilities.json"

export default {
    getHeroes() {

        return new Promise((resolve, reject) => {
            return resolve(heros);
        });
        
    },

    getAbilities() {
        return new Promise((resolve, reject) => {
            return resolve(abilities);
        })
    }
};