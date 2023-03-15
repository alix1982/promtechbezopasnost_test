import {useEffect, useState} from 'react';
// import Header from './Header.js';
// import Footer from './Footer.js';

import Main from './Main.js';
import CardPopup from './CardPopup.js';
import menuArrow from '../images/specialImages/menuArrow.svg';
import films from '../data.json';
import images from '../utils/Images';
import genres from '../utils/Genre';

function App() {
  const [selectedCard, setSelectedCard] = useState({id: -1});
  const [bestCard, setBestCard] = useState({id: -1});
  const [isCardPopupOpen, setIsCardPopup] = useState(false);
  const [values, setValues] = useState({
    select: '0',
    input: ''
  });

  useEffect(() => {
    JSON.parse(localStorage.getItem('bestFilm')) !== null && setBestCard(JSON.parse(localStorage.getItem('bestFilm'))) 
  },[])
  useEffect(() => {
    JSON.parse(localStorage.getItem('bestFilm')) !== null && setBestCard(JSON.parse(localStorage.getItem('bestFilm'))) 
  },[selectedCard])
  
  useEffect(()=> {
    function onCloseEsc (evt) {
      if (evt.key === 'Escape') {closeAllPopups()}
    }
    document.addEventListener('keydown', onCloseEsc);
    return () => {
      document.removeEventListener('keydown', onCloseEsc);
    }
  })

  function onCloseOverlay (evt) {
    (evt.target === evt.currentTarget) && closeAllPopups()
  }

  function closeAllPopups () {
    setIsCardPopup(false)
  }

  function setGenresFilm (film) {
    const genresFilm = film.genre.reduce((accumulator, item, index, array) => {
      let creatureGenresFilms = accumulator + genres[item];
      if (index !== array.length-1) {
        creatureGenresFilms += ', '
      }
      return creatureGenresFilms;
    }, '')
    return genresFilm
  }
  
  function addBestCard() {
    setBestCard(selectedCard);
    localStorage.removeItem('bestFilm');
    localStorage.setItem('bestFilm', JSON.stringify(selectedCard));
    closeAllPopups();
  }
  function removeBestCard() {
    localStorage.removeItem('bestFilm');
    setBestCard({id: -1});
    closeAllPopups();
  }
  
  return (
    <>
      <div className="page">
        {/* <Header /> */}
        <Main
          menuArrow = {menuArrow}
          films={films} images={images} setGenresFilm={setGenresFilm}
          bestCard = {bestCard}
          setBestCard = {setBestCard}
          selectedCard = {selectedCard}
          onSelectedCard = {(selectedCard) => {setSelectedCard(selectedCard)}}
          onCardPopup = {setIsCardPopup}
          values = {values}
          setValues = {setValues}
        />
        {/* <Footer /> */}
      </div>
      <CardPopup 
        film = {selectedCard} images={images} setGenresFilm={setGenresFilm}
        isOpen = {isCardPopupOpen}
        bestCard = {bestCard}
        addBestCard = {addBestCard}
        removeBestCard = {removeBestCard}
        onClose = {closeAllPopups}
        onCloseOverlay = {(evt) => onCloseOverlay(evt)}
      />
    </>  
  );
}

export default App;
