import TecnicoService from '../../services/TecnicoService';
import IndexBase from '../IndexBase';

class TecnicoIndexStore extends IndexBase {
  constructor() {
    super(TecnicoService);
  }
}

export default TecnicoIndexStore;
