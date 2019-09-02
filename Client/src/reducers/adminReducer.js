import {
  ADMIN_LOGIN,
  GET_ALL_ECOLE,
  PEOPLE_WHO_STROCK,
  IS_THERE_A_STRICK_WITH_DATE
} from "../action/types";

const initialState = {
  adminCo: null,
  lesEcoles: [],
  ThePeopleWhoStrock: { lesprofs: [], lesresps: [] },
  is_there_a_strick_with_date: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {
        ...state,
        adminCo: action.payload
      };
    case GET_ALL_ECOLE:
      return {
        ...state,
        lesEcoles: action.payload
      };
    case PEOPLE_WHO_STROCK:
      return {
        ...state,
        ThePeopleWhoStrock: action.payload
      };
    case IS_THERE_A_STRICK_WITH_DATE:
      return {
        ...state,
        is_there_a_strick_with_date: action.payload
      };
    default:
      return state;
  }
}
