import { useState } from 'react';
import UsuarioService from '../service/UsuarioService';
import Header from "./header/Header.jsx";


const FormularioRegistro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [fnacimiento, setFechaNacimiento] = useState('');



  const guardarUsuario = (e) => {
    e.preventDefault();
    const usuario = { nombre, apellido, correo, contraseña, fnacimiento };
    UsuarioService.registrarUsuario(usuario)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div>
        <Header/>
        <div className={"flex justify-center space-y-5"}>
          <div className={"flex-col bg-white py-[49px] px-10 rounded w-full sm:w-[400px]"}>

            <h1 className='text-2xl font-extrabold justify-center flex'>Register</h1>
            <br/>
            <h1 className={"text-2xl font-light justify-center flex"}>Registrarse en BlogWise</h1>
            <br/>
            <h3 className={"pb-1"}>Nombre y apellido:</h3>
            <form className={"font-light"}>
              <div className={"flex justify-between gap-3 w-full"}>
                <div>
                  <input
                      className={"border border-gray-300 placeholder-gray-500 text-gray-900 px-4 py-2 rounded-md w-full"}
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Ej: Juan"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                  />
                </div>
                <div>
                  <input
                      className={"border border-gray-300 placeholder-gray-500 text-gray-900 px-4 py-2 rounded-md w-full"}
                      type="text"
                      id="apellido"
                      name="apellido"
                      placeholder="Ej: Fiallos"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      required
                  />
                </div>
              </div>
              <br/>
              <h3 className={"pb-1"}>Correo electronico:</h3>
              <div>
                <input
                    className={"border border-gray-300 placeholder-gray-500 text-gray-900 px-4 py-2 rounded-md w-full"}
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="Correo electronico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
              </div>
              <br/>
              <h3 className={"pb-1"}>Contraseña:</h3>
              <div>
                <input
                    className={"border border-gray-300 placeholder-gray-500 text-gray-900 px-4 py-2 rounded-md w-full"}
                    type="password"
                    id="contraseña"
                    name="contraseña"
                    value={contraseña}
                    placeholder={"Contraseña"}
                    onChange={(e) => setContraseña(e.target.value)}
                    required
                />
              </div>
              <br/>
              <h3 className={"pb-1"}>Confirmar contraseña:</h3>
              <div>
                <input
                    className={"border border-gray-300 placeholder-gray-500 text-gray-900 px-4 py-2 rounded-md w-full"}
                    type="password"
                    id="contraseña"
                    name="contraseña"
                    value={contraseña}
                    placeholder={"Confirme su contraseña"}
                />
              </div>

              <div>
                <br/>
                <h3 className={"pb-1"}>Fecha de nacimiento:</h3>
                <input
                    className={"border border-gray-300 placeholder-gray-500 text-gray-900 px-4 py-2 rounded-md w-full"}
                    type="date"
                    id="fnacimiento"
                    name="fnacimiento"
                    value={fnacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    required
                />
              </div>
              <br/>
              <button className={"bg-[#6DC093] w-full py-2 rounded text-white"} type="submit"
                      onClick={(e) => guardarUsuario(e)}>Registrarse
              </button>
            </form>
            <br/>
            <div className={"flex justify-center"}>
              <h3 className={"font-light"}>Ya tienes cuenta?</h3><a href="/login" className={"font-extrabold"}>INICIA
              SESION</a>
            </div>
          </div>

        </div>
      </div>

  );
};

export default FormularioRegistro;