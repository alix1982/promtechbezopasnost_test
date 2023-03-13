import Card from './Card';

function Gallery(props) {

  return (
    <section className="gallery" aria-label="gallery">
      <ul className="gallery__list">
        {props.films.map((item)=>{
          return (
            <li className="gallery__point" key={item.id}>
              <Card film={item} setGenresFilm={props.setGenresFilm} images={props.images} />
            </li>
          )
        })}
      </ul>
    </section>
  );
}

export default Gallery;

