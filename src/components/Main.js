import BestFilms from './BestFilm';
import Form from './Form';
import Gallery from './Gallery';

function Main(props) {

  return (
    <main>
      <h1 aria-label="films"> </h1>
      <section>
        <h2 className="main__heading">Популярные фильмы</h2>
        <Form menuArrow = {props.menuArrow}/>
        <Gallery films={props.films} images={props.images} setGenresFilm={props.setGenresFilm}/>
      </section>
      <section  className="main__bestFilms">
        <h2 className="main__heading">Самый лучший фильм</h2>
        <BestFilms film={props.film} images={props.images} setGenresFilm={props.setGenresFilm}/>
      </section>
    </main>
  );
}

export default Main;
