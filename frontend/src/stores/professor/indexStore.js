import ProfessorService from '../../services/ProfessorService';
import IndexBase from '../IndexBase';

class ProfessorIndexStore extends IndexBase {
  constructor() {
    super(ProfessorService);
  }
}

export default ProfessorIndexStore;
