
function CardPopup(props) {

  return (
    <section className={`cardPopup ${(props.isOpen ? 'cardPopup_opened' : '')}`} onClick = {props.onCloseOverlay} aria-label="movie window">
      <div className="cardPopup__popup">
        <img className="cardPopup__poster" src={props.images[props.film.id-1]} width="150px" height="225px" alt="poster"></img>
        <article className="cardPopup__content">
          <h3 className="cardPopup__heading">{props.film.name}</h3>
          <p className="cardPopup__genre">
            {props.film.name === undefined ? '' : props.setGenresFilm(props.film)}
          </p>
          <time className="cardPopup__year">{props.film.year}</time>
          <p className="cardPopup__description">{props.film.description}</p>
          <div className="cardPopup__buttons">
            <button
              className={`cardPopup__buttonLike ${props.film.id === props.bestCard.id && 'cardPopup__buttonLike_bestFilm'}`}
              onClick={props.film.id === props.bestCard.id ? props.removeBestCard : props.addBestCard}
            >
              {`${props.film.id === props.bestCard.id ? 'Удалить из лучших фильмов' : 'Выбрать лучшим фильмом'}`}
            </button>
            <button className="cardPopup__buttonClose" onClick = {props.onClose}>Закрыть</button>
          </div>
        </article>
      </div>
    </section>
  );
}
  
export default CardPopup;