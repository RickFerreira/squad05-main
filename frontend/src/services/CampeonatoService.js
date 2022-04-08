import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class CampeonatoService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.campeonato);
  }
}

const instance = new CampeonatoService();

export default instance;
