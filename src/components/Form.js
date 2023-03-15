
function Form(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    props.setValues({
      ...props.values,
      [name]: value,
    });
  };

  return (
    <section aria-label="form">
      <form className="form" name="sort" id="sort">
        <fieldset className="form__sortGenre">
          <legend></legend>
          <select className="form__listGenre" name="select" value={props.values.select} onChange={handleChange} placeholder="Все">
            <option value="0">Все</option>
            <option value="1">драма</option>
            <option value="2">биография</option>
            <option value="3">история</option>
            <option value="4">фэнтези</option>
            <option value="5">приключения</option>
            <option value="6">боевик</option>
            <option value="7">мультфильм</option>
            <option value="8">комедия</option>
            <option value="9">триллер</option>
            <option value="10">детектив</option>
            <option value="11">фантастика</option>
          </select>
        </fieldset>
        <fieldset className="form__sortName">
          <legend></legend>
          <input className="form__sortNameInput" name="input" value={props.values.input} onChange={handleChange} placeholder='Введите название'></input>
        </fieldset>
      </form>
    </section>
  );
}

export default Form;
