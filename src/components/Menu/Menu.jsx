import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorite } from '../../actions/favorites';
import { FormContext } from '../../App';
import { Add, Favorites, Garbage } from './Svg';

export default function Menu() {
  const setIsOpen = useContext(FormContext);

  const { favorites } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  function handleActiveMenu() {
    setActive(!active);
  }

  function handleDeleteFavorite(name) {
    dispatch(deleteFavorite(name));
  }

  function handleOpenAddCharacter() {
    setIsOpen(true);
  }

  return (
    <div className='menu__container'>
      <div className='menu__options'>
        <p className='menu__options-fav' onClick={handleActiveMenu}>
          FAVORITOS
        </p>
        <Add />
        <div id='line' />
        <p className='menu__options-add' onClick={handleOpenAddCharacter}>
          AGREGAR
        </p>
        <Favorites />
      </div>
      <div className={active ? 'menu__favorites-active' : 'menu__favorites'}>
        {favorites.length > 0 ? (
          favorites.map((char) => (
            <div key={char.name} className='menu__favorites-list'>
              <img src={char.image} alt={char.name} />
              <p>{char.name}</p>
              <span
                id='garbage'
                onClick={() => {
                  handleDeleteFavorite(char.name);
                }}
              >
                <Garbage />
              </span>
            </div>
          ))
        ) : (
          <p className='menu__empty'>NO HAY FAVORITOS</p>
        )}
      </div>
    </div>
  );
}
