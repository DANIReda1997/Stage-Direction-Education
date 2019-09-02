import { IS_THERE_A_STRICK, ADD_GREVE } from "../action/types";

import axios from "axios";

export const isThereaStrick = () => async dispatch => {
  const response = await axios.get(
    `http://localhost:8080/greve/isthereastrick`
  );
  dispatch({
    type: IS_THERE_A_STRICK,
    payload: response.data
  });
};

export const addStrick = (adminCo, description) => async dispatch => {
  const response = await axios.post(
    `http://localhost:8080/greve/addgrevetoday`,
    { adminCo, description }
  );
  dispatch({
    type: ADD_GREVE,
    payload: response.data
  });
};
