import { CHECK_LOGIN } from "./types";
import {
  AJOUTER_PROFESSEURS_GREVE,
  SUPPRIMER_PROFESSEURS_GREVE,
  AJOUTER_RESPONSABLES_GREVE,
  SUPPRIMER_RESPONSABLES_GREVE,
  APPLIQUER_MANIFESTANTS_GREVE,
  LES_PROFESSEURS,
  LES_RESPONSABLES
} from "./types";
import axios from "axios";

export const Login = (login, password) => async dispatch => {
  const response = await axios.get(
    `http://localhost:8080/directeur/${login}/${password}`
  );
  dispatch({
    type: CHECK_LOGIN,
    payload: response.data
  });
};

export const getProfesseurs = id_directeur => async dispatch => {
  const response = await axios.get(
    `http://localhost:8080/directeur/${id_directeur}/getProfesseurs`
  );
  dispatch({
    type: LES_PROFESSEURS,
    payload: response.data
  });
};

export const getResponsables = id_directeur => async dispatch => {
  const response = await axios.get(
    `http://localhost:8080/directeur/${id_directeur}/getResponsables`
  );
  dispatch({
    type: LES_RESPONSABLES,
    payload: response.data
  });
};

export const setManifestantEnGreve = (
  id_manifestant,
  addorremove,
  type
) => dispatch => {
  if (type === "professeur") {
    if (addorremove === "add") {
      dispatch({
        type: AJOUTER_PROFESSEURS_GREVE,
        payload: id_manifestant
      });
    } else {
      dispatch({
        type: SUPPRIMER_PROFESSEURS_GREVE,
        payload: id_manifestant
      });
    }
  } else {
    if (addorremove === "add") {
      dispatch({
        type: AJOUTER_RESPONSABLES_GREVE,
        payload: id_manifestant
      });
    } else {
      dispatch({
        type: SUPPRIMER_RESPONSABLES_GREVE,
        payload: id_manifestant
      });
    }
  }
};

export const appliquerManifestantsGreve = lesmanifestants => async dispatch => {
  await axios.post(
    `http://localhost:8080/directeur/AppliquerManifestants`,
    lesmanifestants
  );
  dispatch({
    type: APPLIQUER_MANIFESTANTS_GREVE
  });
};
