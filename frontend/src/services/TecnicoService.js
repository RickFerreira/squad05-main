import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class TecnicoService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.tecnico);
  }
}

const instance = new TecnicoService();

export default instance;
