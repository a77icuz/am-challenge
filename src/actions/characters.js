import axios from 'axios';
import { charactersTypes } from '../constants/characters';

const baseUrl = 'http://localhost:4000';

export const getAllCharacters = () => async (dispatch) => {
  dispatch({ type: charactersTypes.getAllRequest });
  const { data } = await axios.get(`${baseUrl}/character`);

  dispatch({ type: charactersTypes.getAllSuccess, payload: data });
};

export const filterStudents = () => async (dispatch) => {
  dispatch({ type: charactersTypes.filterStudendsRequest });
  const { data } = await axios(`${baseUrl}/character`);
  const students = data.filter((char) => char.hogwartsStudent);

  dispatch({ type: charactersTypes.filterStudendsSuccess, payload: students });
};

export const filterStaff = () => async (dispatch) => {
  dispatch({ type: charactersTypes.filterStaffRequest });
  const { data } = await axios(`${baseUrl}/character`);
  const staff = data.filter((char) => char.hogwartsStaff);

  dispatch({ type: charactersTypes.filterStaffSuccess, payload: staff });
};

export const addNewCharacter = (char) => async (dispatch) => {
  dispatch({ type: charactersTypes.addNewRequest, payload: char });

  await axios
    .post(`${baseUrl}/character`, {
      id: new Date().getTime(),
      alive: true,
      ...char,
    })
    .then((response) => {});

  const { data } = await axios.get(`${baseUrl}/character`);
  dispatch({ type: charactersTypes.addNewSuccess, payload: data });
};
