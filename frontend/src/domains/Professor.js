import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Professor extends DomainBase {
  @observable id;
  @observable cpf;
  @observable dataNascimento;
  @observable email;
  @observable nome;
  @observable titulo;
  @observable area;

  static getDomainAttributes() {
    return ['id', 'cpf', 'dataNascimento', 'email', 'nome', 'titulo', 'area'];
  }
}

export default Professor;
