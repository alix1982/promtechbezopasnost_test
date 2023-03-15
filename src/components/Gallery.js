import Card from './Card';

function Gallery(props) {
  
  let arrRender = [];

  if ((props.values.select === '0' || props.values.select === '') && props.values.input === '') {
    arrRender = props.films;
  } else if (props.values.select === '0' || props.values.select === '') {
    props.films.forEach((item)=>{
      if (item.name.toLowerCase().includes(props.values.input.toLowerCase())) {
        arrRender.push(item)
      }
    })
  } else {
    props.films.forEach((item)=>{
      item.genre.forEach(element => {
        if (element === parseInt(props.values.select, 10)) {
          if (item.name.toLowerCase().includes(props.values.input.toLowerCase())) {
            arrRender.push(item)
          }
        }
      })
    })
  }

  return (
    <section className="gallery" aria-label="gallery">
      <ul className="gallery__list">
        {arrRender.map((item)=>{
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

