import ComissaoService from '../../services/ComissaoService';
import IndexBase from '../IndexBase';

class ComissaoIndexStore extends IndexBase {
  constructor() {
    super(ComissaoService);
  }
}

export default ComissaoIndexStore;
