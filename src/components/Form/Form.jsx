import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormContext } from '../../App';
import { useForm } from '../../hooks/useForm';

import { fileUpload } from '../../helpers/fileUpload';
import { FormClose } from './Svg';
import { addNewCharacter } from '../../actions/characters';

export default function Form() {
  const setIsOpen = useContext(FormContext);
  const dispatch = useDispatch();

  const [image, setImage] = useState('');

  let hogwartsStudent = false;
  let hogwartsStaff = false;

  const [{ name, dateOfBirth, eyeColour, hairColour, gender, position }, handleInputChange, reset] = useForm({
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: '',
    position: '',
  });

  function handleCloseAddCharacter() {
    setIsOpen(false);
  }

  function handleFormSubmint(e) {
    e.preventDefault();

    if (position === 'student') {
      hogwartsStudent = true;
    } else if (position === 'staff') {
      hogwartsStaff = true;
    }

    const data = { name, dateOfBirth, eyeColour, hairColour, gender, hogwartsStudent, hogwartsStaff, image };

    dispatch(addNewCharacter(data));

    reset();
    setImage('');
    setIsOpen(false);
  }

  async function handleFileInputChange(e) {
    const file = e.target.files[0];
    setImage(await fileUpload(file));
  }

  return (
    <div className='form'>
      <div className='form__header'>
        <p>Agrega un personaje</p>
        <span id='close' onClick={handleCloseAddCharacter}>
          <FormClose />
        </span>
      </div>
      <form onSubmit={handleFormSubmint}>
        <div className='form__input-text'>
          <div>
            <p>NOMBRE: </p>
            <input type='text' name='name' value={name} onChange={handleInputChange} />
          </div>
          <div>
            <p>CUMPLEAÑOS: </p>
            <input type='date' name='dateOfBirth' value={dateOfBirth} onChange={handleInputChange} />
          </div>
          <div>
            <p>COLOR DE OJOS: </p>
            <input type='text' name='eyeColour' value={eyeColour} onChange={handleInputChange} />
          </div>
          <div>
            <p>COLOR DE PELO: </p>
            <input type='text' name='hairColour' value={hairColour} onChange={handleInputChange} />
          </div>
        </div>
        <div className='form__input-radio'>
          <div>
            <p>GENERO: </p>
            <span id='radio_inputs'>
              <input type='radio' id='radio' name='gender' value='male' onChange={handleInputChange} />
              <span id='radio_title'> Hombre </span>
              <input type='radio' id='radio' name='gender' value='female' onChange={handleInputChange} />
              <span id='radio_title'> Mujer </span>
            </span>
          </div>

          <div>
            <p>POSICION: </p>
            <span id='radio_inputs'>
              <input type='radio' id='radio' name='position' value='student' onChange={handleInputChange} />
              <span id='radio_title'> Estudiante </span>
              <input type='radio' id='radio' name='position' value='staff' onChange={handleInputChange} />
              <span id='radio_title'> Staff </span>
            </span>
          </div>
        </div>

        <div className='form__input-file'>
          <span>FOTOGRAFIA: </span>
          <input type='file' name='image' accept='.jpg' onChange={handleFileInputChange} />
        </div>

        <div className='form__button'>
          <button className='form__button-save' type='submit'>
            GUARDAR
          </button>
        </div>
      </form>
    </div>
  );
}
