import Card from './Card';

function BestFilms(props) {

  return (
    <Card film={props.film} setGenresFilm={props.setGenresFilm} images={props.images} />
  );
}

export default BestFilms;