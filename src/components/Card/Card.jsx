import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addNewFavorite } from '../../actions/favorites';
import { profilePicture } from '../../helpers/styles';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';
import getStudentOrStaff from '../../helpers/studentOrStaff';
import Loader from '../ui/Loader';
import { Bookmark, BookmarkActive } from './svg';

export default function Card() {
  const { characters, loading } = useSelector((state) => state.characters);
  const { favorites } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  function handleAddToFavorites(name) {
    dispatch(addNewFavorite(name));
  }

  if (loading) return <Loader />;

  return (
    <div className='card__container'>
      {characters.map((char) => (
        <div key={char.name} className='card' style={{ backgroundColor: `${!char.alive && '#CCCCCC'}` }}>
          <div className='card__profile-picture' style={{ background: profilePicture[char.house ? char.house : 'NA'] }}>
            <img
              src={
                char.image
                  ? char.image
                  : 'https://res.cloudinary.com/dn6unzxco/image/upload/v1642447551/jhgm3jhaicvv5uhius0u.jpg'
              }
            />
          </div>
          <div className='card__profile-info'>
            <span className='card__profile-info-status'>
              {char.alive ? 'VIVO' : 'FINADO'} / {getStudentOrStaff(char)}
              <div
                className='card__profile-bookmark'
                onClick={() => {
                  handleAddToFavorites(char.name);
                }}
              >
                {favorites.find((fav) => fav.name === char.name) ? <BookmarkActive /> : <Bookmark />}
              </div>
            </span>
            <span className='card__profile-info-name'>{char.name}</span>
            <div className='card__profile-info-status-md'>
              <strong>Cumpleaños: </strong> {char.dateOfBirth ? char.dateOfBirth : 'NA'} <br />
              <strong>Género: </strong> {char.gender ? capitalizeFirstLetter(char.gender) : 'NA'} <br />
              <strong>Color de ojos: </strong> {char.eyeColour ? capitalizeFirstLetter(char.eyeColour) : 'NA'} <br />
              <strong>Color de pelo: </strong> {char.hairColour ? capitalizeFirstLetter(char.hairColour) : 'NA'} <br />
            </div>
            <div className='card__profile-info-status-sm'>
              <span>
                <strong>VIVO</strong> <br />
                <strong>ESTUDIANTE</strong> <br />
              </span>
              <div className='card__profile-bookmark-sm'
                onClick={() => {
                  handleAddToFavorites(char.name);
                }}
              >
                {favorites.find((fav) => fav.name === char.name) ? <BookmarkActive /> : <Bookmark />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
