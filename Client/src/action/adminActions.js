import {
  ADMIN_LOGIN,
  GET_ALL_ECOLE,
  PEOPLE_WHO_STROCK,
  IS_THERE_A_STRICK_WITH_DATE
} from "./types";
import axios from "axios";

export const adminlogin = (login, password) => async dispatch => {
  const response = await axios.get(
    `http://localhost:8080/admin/${login}/${password}`
  );
  dispatch({
    type: ADMIN_LOGIN,
    payload: response.data
  });
};

export const getallecole = () => async dispatch => {
  const response = await axios.get(`http://localhost:8080/admin/getallecole`);
  dispatch({
    type: GET_ALL_ECOLE,
    payload: response.data
  });
};

export const peopleWhoStrock = (
  id_ecole,
  day,
  month,
  year
) => async dispatch => {
  const response = await axios.get(
    `http://localhost:8080/admin/getallgrevebyecole/${id_ecole}/${day}/${month}/${year}`
  );
  dispatch({
    type: PEOPLE_WHO_STROCK,
    payload: response.data
  });
};

export const isThereaStrickWithDate = (day, month, year) => async dispatch => {
  const response = await axios.get(
    `http://localhost:8080/admin/isThereaStrickWithDate/${day}/${month}/${year}`
  );
  dispatch({
    type: IS_THERE_A_STRICK_WITH_DATE,
    payload: response.data
  });
};
