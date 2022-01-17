export const profilePicture = {
  Gryffindor: `linear-gradient(135deg, #FF0000 0%, #FED482 100%)`,
  Slytherin: `linear-gradient(135deg, #1C792B 0%, #82E95E 100%)`,
  Ravenclaw: `linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)`,
  Hufflepuff: `linear-gradient(135deg, #FFC700 0%, #FFF388 100%)`,
  NA: `linear-gradient(135deg, #6200ff 0%, #bc88ff 100%)`,
};

export const modalStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 1020,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    maxWidth: '1280px',
    height: '100%',
    background: 'rgba(29, 29, 29, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: '0',
    maxWidth: '727px',
    overflowY: 'hidden',
    overflowX: 'hidden',
    position: 'relative',
    left: '-1%',
  },
};
