import { IS_THERE_A_STRICK, ADD_GREVE } from "../action/types";

const initialState = {
  isthereastrick: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IS_THERE_A_STRICK:
      return {
        ...state,
        isthereastrick: action.payload
      };
    case ADD_GREVE:
      return {
        ...state,
        isthereastrick: action.payload
      };
    default:
      return state;
  }
}
