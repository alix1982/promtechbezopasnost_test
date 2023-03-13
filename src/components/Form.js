
function Form(props) {
  return (
    <section aria-label="form">
      <form className="form">
        <fieldset className="form__sortGenre">
          <legend></legend>
          <p className="form__sortGenreHeading">Все</p>
          <img src={props.menuArrow} alt="стрелка"></img>
          <ul className="form__listGenre">
            <li>драма</li>
            <li>биография</li>
            <li>история</li>
            <li>фэнтези</li>
            <li>приключения</li>
            <li>оевик</li>
            <li>мультфильм</li>
            <li>комедия</li>
            <li>триллер</li>
            <li>детектив</li>
            <li>фантастика</li>
          </ul>
        </fieldset>
        <fieldset className="form__sortName">
          <legend></legend>
          <input className="form__sortNameInput" placeholder='Введите название'></input>
        </fieldset>
      </form>
    </section>
  );
}

export default Form;
