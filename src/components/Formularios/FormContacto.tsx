import { useState } from "react";
import './FormContacto.css';

const FormContacto = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    descripcion: "",
    sabor: ""
  });

  const handleInputChange = (event: any) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event: any) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido + " "+datos.descripcion+" "+datos.sabor);
  };

  return (
    <div className="container">
      <h2>Contacto</h2>
      <form onSubmit={enviarDatos}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              placeholder="Nombre"
              className="form-control"
              onChange={handleInputChange}
              name="nombre"
            />
            </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="apellidos">Apellidos</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              placeholder="Apellido"
              className="form-control"
              onChange={handleInputChange}
              name="apellido"
            />
            </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="descripcion">Descripcion:</label>
          </div>
          <div className="col-75">
          <textarea
            value={datos.descripcion}
            className="form-control"
            onChange={handleInputChange}
            name="descripcion"
          />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="nombre">
              Elige el sabor:</label>
          </div>
          <div className="col-75">
            <select value={datos.sabor} onChange={handleInputChange} name="sabor">
              <option value="uva">Uva</option>
              <option value="limon">Limón</option>
              <option value="coco">Coco</option>
              <option value="mango">Mango</option>
            </select>
          </div>
        </div>
        <div className="row">
           <button type="submit" className="btn btn-primary">
             Enviar
           </button>
        </div>
      </form>
      <div>
        <p>Nombre: {datos.nombre}</p>
        <p>Apellido: {datos.apellido}</p>
        <p>Descripcion: {datos.descripcion}</p>
        <p>Sabor: {datos.sabor}</p>
      </div>
    </div>
  );
};

export default FormContacto;
