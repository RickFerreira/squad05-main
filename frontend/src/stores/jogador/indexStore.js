import JogadorService from '../../services/JogadorService';
import IndexBase from '../IndexBase';

class JogadorIndexStore extends IndexBase {
  constructor() {
    super(JogadorService);
  }
}

export default JogadorIndexStore;
