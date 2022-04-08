import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Jogador extends DomainBase {
  @observable id;
  @observable nome;
  @observable nacionalidade;
  @observable posicao;
  @observable peChute;
  @observable dataNascimento;
  @observable altura;
  @observable massa;

  static getDomainAttributes() {
    return ['id', 'nome', 'nacionalidade', 'posicao', 'peChute', 'dataNascimento', 'altura', 'massa'];
  }
}

export default Jogador;
