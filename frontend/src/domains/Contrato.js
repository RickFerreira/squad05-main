import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Contrato extends DomainBase {
  @observable id;
  @observable titulo;
  @observable descricao;
  @observable permiteAditivo;
  @observable dataVencimento;

  static getDomainAttributes() {
    return ['id', 'titulo', 'descricao', 'permiteAditivo', 'dataVencimento'];
  }
}

export default Contrato;
