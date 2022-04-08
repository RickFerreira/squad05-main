import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class JogadorService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.jogador);
  }
}

const instance = new JogadorService();

export default instance;
