import axios from "axios";

export const getPersonajes = ({ commit }) => {
  axios
    .get(
      "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21]"
    )
    .then((response) => {
      commit("SET_PERSONAJES", response.data);
    });
};
