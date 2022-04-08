import DisciplinaService from '../../services/DisciplinaService';
import IndexBase from '../IndexBase';

class DisciplinaIndexStore extends IndexBase {
  constructor() {
    super(DisciplinaService);
  }
}

export default DisciplinaIndexStore;
