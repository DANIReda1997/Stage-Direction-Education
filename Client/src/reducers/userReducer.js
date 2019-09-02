import { CHECK_LOGIN } from "../action/types";
import {
  LES_PROFESSEURS,
  LES_RESPONSABLES,
  AJOUTER_RESPONSABLES_GREVE,
  SUPPRIMER_RESPONSABLES_GREVE,
  APPLIQUER_MANIFESTANTS_GREVE,
  AJOUTER_PROFESSEURS_GREVE,
  SUPPRIMER_PROFESSEURS_GREVE
} from "../action/types";

const initialState = {
  directeur: {},
  professeurs: [],
  responsables: [],
  professeursengreve: [],
  responsablesengreve: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHECK_LOGIN:
      return {
        ...state,
        directeur: action.payload
      };
    //
    case LES_PROFESSEURS:
      return {
        ...state,
        professeurs: action.payload
      };
    //
    case LES_RESPONSABLES:
      return {
        ...state,
        responsables: action.payload
      };
    //
    case AJOUTER_PROFESSEURS_GREVE:
      return {
        ...state,
        professeursengreve: [action.payload, ...state.professeursengreve]
      };
    //
    case SUPPRIMER_PROFESSEURS_GREVE:
      return {
        ...state,
        professeursengreve: state.professeursengreve.filter(
          professeursengreve => professeursengreve !== action.payload
        )
      };
    //
    case AJOUTER_RESPONSABLES_GREVE:
      return {
        ...state,
        responsablesengreve: [action.payload, ...state.responsablesengreve]
      };
    //
    case SUPPRIMER_RESPONSABLES_GREVE:
      return {
        ...state,
        responsablesengreve: state.responsablesengreve.filter(
          responsablesengreve => responsablesengreve !== action.payload
        )
      };
    //
    case APPLIQUER_MANIFESTANTS_GREVE:
      return {
        ...state,
        responsablesengreve: [],
        professeursengreve: []
      };

    default:
      return state;
  }
}
