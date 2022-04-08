import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class ContratoService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.contrato);
  }
}

const instance = new ContratoService();

export default instance;
