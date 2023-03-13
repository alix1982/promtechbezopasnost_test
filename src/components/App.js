// import {useEffect, useState} from 'react';
// import Header from './Header.js';
// import Footer from './Footer.js';

import Main from './Main.js';
import menuArrow from '../images/specialImages/menuArrow.svg';
import films from '../data.json';
import images from '../utils/Images';
import genres from '../utils/Genre';

function App() {

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

  const film = films[1];
  
  return (
    
      <div className="page">
        {/* <Header /> */}
        <Main
          menuArrow = {menuArrow}
          films={films} images={images} setGenresFilm={setGenresFilm}
          film={film}
        />
        {/* <Footer /> */}
      </div>
  );
}

export default App;
