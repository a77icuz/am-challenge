import { favoritesTypes } from '../constants/favorites';

export const addNewFavorite = (name) => async (dispatch, getState) => {
  dispatch({ type: favoritesTypes.request });

  const { characters } = getState().characters;
  const { favorites } = getState().favorites;

  const exist = favorites.filter((char) => char.name === name);
  if (exist.length > 0) return dispatch({ type: favoritesTypes.delete, payload: name });;

  const favorite = characters.filter((char) => char.name === name);
  dispatch({ type: favoritesTypes.success, payload: favorite });
};

export const deleteFavorite = (name) => async (dispatch, getState) => {
  dispatch({ type: favoritesTypes.delete, payload: name });
};
