import { useState } from 'react';
import Header from "./header/Header.jsx";

const LoginForm = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');



  return (
      <div>
        <Header/>
        <div className={"flex justify-center space-y-5"}>
          <div className={"flex-col bg-white py-[49px] px-10 rounded w-full sm:w-[400px]"}>
            <h1 className='text-2xl font-extrabold justify-center flex'>Login</h1>
            <br/>
            <h1 className={"text-2xl font-light justify-center flex"}>Iniciar sesión en BlogWise</h1>
            <br/>
            <h3 className={"pb-1"}>Correo electrónico:</h3>
            <form className={"font-light"}>
              <div>
                <input
                    className={"border border-gray-300 placeholder-gray-500 text-gray-900 px-4 py-2 rounded-md w-full"}
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="Correo electrónico"
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
              {/* eslint-disable-next-line no-undef */}
              <button className={"bg-[#6DC093] w-full py-2 rounded text-white"} type="submit" onClick={(e) => iniciarSesion(e)}>Iniciar sesión</button>
            </form>
            <br/>
            <div className={"flex justify-center"}>
              <h3 className={"font-light"}>¿No tienes cuenta?</h3><a href="/register" className={"font-extrabold"}>REGISTRATE</a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginForm;