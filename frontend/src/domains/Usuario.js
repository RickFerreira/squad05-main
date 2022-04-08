import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Usuario extends DomainBase {
  @observable id;
  @observable nome;
  @observable email;
  @observable nomeCanal;
  @observable dataNascimento;

  static getDomainAttributes() {
    return ['id', 'nome', 'email', 'nomeCanal', 'dataNascimento'];
  }
}

export default Usuario;
