
function Card(props) {
  return (
    <article className="card">
      <img className="card__poster" src={props.images[props.film.id-1]} width="150px" height="225px" alt="poster"></img>
      <h3 className="card__heading">{props.film.name}</h3>
      <p className="card__genre">
        {props.setGenresFilm(props.film)}
      </p>
      <time className="card__year">{props.film.year}</time>
    </article>
  );
}

export default Card;