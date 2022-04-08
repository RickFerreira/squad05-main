import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Aluno extends DomainBase {
  @observable id;
  @observable nome;
  @observable email;
  @observable cpf;
  @observable telefone;
  @observable dataNascimento;

  static getDomainAttributes() {
    return ['id', 'nome', 'email', 'cpf', 'telefone', 'dataNascimento'];
  }
}

export default Aluno;
