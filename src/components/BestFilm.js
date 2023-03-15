// import Card from './Card';

function BestFilms(props) {

  return (
    <article className={props.bestCard.id !== -1 ? "card" : "card_off"} >
      <img className="card__poster" src={props.images[props.bestCard.id-1]} width="150px" height="225px" alt="poster"/>
      <h3 className="card__heading">{props.bestCard.name}</h3>
      <p className="card__genre">
        {props.bestCard.id !== -1 ? props.setGenresFilm(props.bestCard) : ""}
      </p>
      <time className="card__year">{props.bestCard.year}</time>
    </article>
    // <Card film={props.film} setGenresFilm={props.setGenresFilm} images={props.images} />
  );
}

export default BestFilms;