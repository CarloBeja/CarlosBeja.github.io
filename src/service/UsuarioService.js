import axios from "axios";

const URL_Registro = "https://proyecto-blogs-3.onrender.com/auth/registrar";
const URL_Login = "https://proyecto-blogs-3.onrender.com/auth/login";

class UsuarioService {
    registrarUsuario(usuario) {
        return axios.post(URL_Registro, usuario)
          .catch(error => {
            console.error("Error al registrar usuario:", error);
            throw error; 
          });
      }
    
      iniciarSesion(credenciales) {
        return axios.post(URL_Login, credenciales)
          .catch(error => {
            console.error("Error al iniciar sesión:", error);
            throw error; 
          });
      }
    }
const usuarioService = new UsuarioService();
export default usuarioService;
