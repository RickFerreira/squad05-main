import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Comissao extends DomainBase {
  @observable id;
  @observable tipo;
  @observable numero;
  @observable dataVigenciaInicial;
  @observable dataVigenciaFinal;

  static getDomainAttributes() {
    return ['id', 'tipo', 'numero', 'dataVigenciaInicial', 'dataVigenciaFinal'];
  }
}

export default Comissao;
