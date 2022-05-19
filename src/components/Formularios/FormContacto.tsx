import { useEffect, useState } from "react";
//import { Redirect } from "react-router";
import { Navigate, useNavigate } from "react-router-dom"
import './FormContacto.css';
//import { useNavigate } from 'react-router-dom';
//import { Redirect } from "react-router";

const FormContacto = () => {

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    descripcion: "",
    orientacion: "",
    jornada: ""
  });

  let navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

   useEffect(() => {
     if (localStorage.getItem("dataForm")){
      const dataForm : string = localStorage.getItem("dataForm") ? localStorage.getItem("dataForm") || '': '';
      setDatos(JSON.parse(dataForm));
     }

  }, []);

  const enviarDatos = (event: any) => {
    event.preventDefault();
    console.log("enviando datos..." + JSON.stringify(datos));
    localStorage.setItem("dataForm",JSON.stringify(datos));
    setDatos({
      nombre: "",
      apellido: "",
      descripcion: "",
      orientacion: "",
      jornada: ""
    });
    navigate("/");
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
              value={datos.nombre}
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
              value={datos.apellido}
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
              Elige la orientación:</label>
          </div>
          <div className="col-75">
            <select value={datos.orientacion} onChange={handleInputChange} name="orientacion">
              <option value="N">Norte</option>
              <option value="S">Sur</option>
              <option value="E">Este</option>
              <option value="O">Oeste</option>
            </select>
          </div>
        </div>

        <div className="row">
            <div className="col-25">
              <label htmlFor="nombre">
              Elige el horario:</label>
            </div>
            <div className="col-75">
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="jornada"
                    value="Mañana"
                    checked={datos.jornada === "Mañana"}
                    onChange={handleInputChange}
                  />
                  Mañana
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="jornada"
                    value="Tarde"
                    checked={datos.jornada === "Tarde"}
                    onChange={handleInputChange}
                  />
                  Tarde
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="jornada"
                    value="Partido"
                    checked={datos.jornada === "Partido"}
                    onChange={handleInputChange}
                  />
                  Partida
                </label>
             </div>
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
        <p>Orientación: {datos.orientacion}</p>
        <p>Jornada: {datos.jornada}</p>
      </div>
    </div>
  );
};

export default FormContacto;
