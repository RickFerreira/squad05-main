import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class UsuarioService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.usuario);
  }
}

const instance = new UsuarioService();

export default instance;
