import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Tecnico extends DomainBase {
  @observable id;
  @observable nome;
  @observable numTitulos;
  @observable dataNascimento;
  @observable estiloJogo;

  static getDomainAttributes() {
    return ['id', 'nome', 'numTitulos', 'dataNascimento', 'estiloJogo'];
  }
}

export default Tecnico;
