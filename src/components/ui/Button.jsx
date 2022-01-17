import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters, filterStudents, filterStaff } from '../../actions/characters';

export default function Button() {
  const dispatch = useDispatch();

  const { activeStudents, activeStaff } = useSelector((state) => state.characters);

  function handleStudentsFilter() {
    if (activeStudents) return dispatch(getAllCharacters());
    dispatch(filterStudents());
  }

  function handleStaffFilter() {
    if (activeStaff) return dispatch(getAllCharacters());
    dispatch(filterStaff());
  }

  return (
    <>
      <button onClick={handleStudentsFilter} className={activeStudents ? 'button button__active' : 'button'}>
        <p>Estudiantes</p>
      </button>

      <button onClick={handleStaffFilter} className={activeStaff ? 'button button__active' : 'button'}>
        <p>Staff</p>
      </button>
    </>
  );
}
