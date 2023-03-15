import likeOff from '../images/specialImages/likeOff.svg'
import likeOn from '../images/specialImages/likeOn.svg'

function Card(props) {

  function handleClick(evt) {
    props.onSelectedCard(props.film);
    if (evt.target.className === 'card__likeImg' || evt.target.className === 'card__like') {
      handleClickLike();
      return;
    }
    props.onCardPopup(true);
  }
  function handleClickLike() {
    props.film.id === props.bestCard.id ? _removeLike() : _addLike();
  }
  function _addLike() {
    props.setBestCard(props.selectedCard);
    localStorage.removeItem('bestFilm');
    localStorage.setItem('bestFilm', JSON.stringify(props.film));
  }
  function _removeLike() {
    localStorage.removeItem('bestFilm');
    props.setBestCard({id: -1});
  }

  return (
    <article className="card" onClick={handleClick} >
      <img className="card__poster" src={props.images[props.film.id-1]} width="150px" height="225px" alt="poster"/>
      <h3 className="card__heading">{props.film.name}</h3>
      <p className="card__genre">
        {props.setGenresFilm(props.film)}
      </p>
      <time className="card__year">{props.film.year}</time>
      <button className="card__like">
        <img className="card__likeImg" src={props.film.id === props.bestCard.id ? likeOn : likeOff} alt="like"/>
      </button>
    </article>
  );
}

export default Card;