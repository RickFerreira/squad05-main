import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class ComissaoService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.comissao);
  }
}

const instance = new ComissaoService();

export default instance;
