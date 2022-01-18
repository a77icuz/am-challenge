import { charactersTypes } from '../constants/characters';

export const charactersReducer = (state = { characters: [] }, { type, payload }) => {
  switch (type) {
    case charactersTypes.getAllRequest:
      return {
        loading: true,
      };

    case charactersTypes.getAllSuccess:
      return {
        loading: false,
        characters: payload,
      };

    case charactersTypes.filterStudendsRequest:
      return {
        loading: true,
      };

    case charactersTypes.filterStudendsSuccess:
      return {
        loading: false,
        activeStudents: true,
        characters: payload,
      };

    case charactersTypes.filterStaffRequest:
      return {
        loading: true,
      };

    case charactersTypes.filterStaffSuccess:
      return {
        loading: false,
        activeStaff: true,
        characters: payload,
      };

    case charactersTypes.addNewRequest:
      return {
        loading: true,
      };

    case charactersTypes.addNewSuccess:
      return {
        loading: false,
        characters: payload,
      };

    default:
      return state;
  }
};
