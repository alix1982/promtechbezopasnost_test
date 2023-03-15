import Card from './Card';

function Gallery(props) {

  return (
    <section className="gallery" aria-label="gallery">
      <ul className="gallery__list">
        {props.films.map((item)=>{
          return (
            <li className="gallery__point" key={item.id}>
              <Card
                film={item}
                images={props.images}
                setGenresFilm={props.setGenresFilm}
                bestCard = {props.bestCard}
                setBestCard = {props.setBestCard}
                selectedCard = {props.selectedCard}
                onSelectedCard={props.onSelectedCard}
                onCardPopup={props.onCardPopup}
              />
            </li>
          )
        })}
      </ul>
    </section>
  );
}

export default Gallery;

