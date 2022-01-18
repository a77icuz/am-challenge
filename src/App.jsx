import { useEffect, useState, createContext } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { getAllCharacters } from './actions/characters';

import Menu from './components/Menu/Menu';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import Button from './components/ui/Button';

import { modalStyles } from './helpers/styles';
import logo from './assets/logo.png';
import MetaData from './components/ui/MetaData';

Modal.setAppElement(document.getElementById('root'));

export const FormContext = createContext();

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <FormContext.Provider value={setIsOpen}>
      <MetaData />
      <div className='main'>
        <Modal isOpen={modalIsOpen} style={modalStyles}>
          <Form />
        </Modal>
        <div className='main__menu'>
          <Menu setIsOpen={'x'} />
        </div>

        <div className='main__header'>
          <img className='main__logo' src={logo} />
          <div className='main__select-filter'>Selecciona tu filtro</div>
        </div>

        <div className='main__buttons'>
          <Button />
        </div>

        <div className='main__cards'>
          <Card />
        </div>

        <div className='main__menu'></div>
      </div>
    </FormContext.Provider>
  );
}
