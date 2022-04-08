import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class AlunoService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.aluno);
  }
}

const instance = new AlunoService();

export default instance;
