import CampeonatoService from '../../services/CampeonatoService';
import IndexBase from '../IndexBase';

class CampeonatoIndexStore extends IndexBase {
  constructor() {
    super(CampeonatoService);
  }
}

export default CampeonatoIndexStore;
