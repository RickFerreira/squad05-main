import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Disciplina extends DomainBase {
  @observable id;
  @observable nome;
  @observable ementa;
  @observable conteudoProgramatico;
  @observable bibliografiaBasica;
  @observable bibliografiaComplementar;
  

  static getDomainAttributes() {
    return ['id', 'nome', 'ementa', 'conteudoProgramatico', 'bibliografiaBasica', 'bibliografiaComplementar'];
  }
}

export default Disciplina;
