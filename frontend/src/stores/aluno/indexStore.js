import AlunoService from '../../services/AlunoService';
import IndexBase from '../IndexBase';

class AlunoIndexStore extends IndexBase {
  constructor() {
    super(AlunoService);
  }
}

export default AlunoIndexStore;
