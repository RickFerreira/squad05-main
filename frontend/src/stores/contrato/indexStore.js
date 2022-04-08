import ContratoService from '../../services/ContratoService';
import IndexBase from '../IndexBase';

class ContratoIndexStore extends IndexBase {
  constructor() {
    super(ContratoService);
  }
}

export default ContratoIndexStore;
