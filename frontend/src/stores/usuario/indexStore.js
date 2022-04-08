import UsuarioService from '../../services/UsuarioService';
import IndexBase from '../IndexBase';

class ContratoIndexStore extends IndexBase {
  constructor() {
    super(UsuarioService);
  }
}

export default ContratoIndexStore;
