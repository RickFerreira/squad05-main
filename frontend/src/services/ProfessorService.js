import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class ProfessorService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.professor);
  }
}

const instance = new ProfessorService();

export default instance;
