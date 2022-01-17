import { favoritesTypes } from '../constants/favorites';

export const favoritesReducer = (state = { favorites: [] }, { type, payload }) => {
  switch (type) {
    case favoritesTypes.request:
      return {
        favorites: [...state.favorites],
        loading: true,
      };

    case favoritesTypes.success:
      return {
        loading: false,
        favorites: [...payload, ...state.favorites].slice(0, 5),
      };

    case favoritesTypes.delete:
      return {
        favorites: state.favorites.filter((fav) => fav.name !== payload),
      };

    default:
      return state;
  }
};
