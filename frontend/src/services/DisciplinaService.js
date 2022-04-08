import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class DisciplinaService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.disciplina);
  }
}

const instance = new DisciplinaService();

export default instance;
