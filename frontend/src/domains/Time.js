import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Time extends DomainBase {
  @observable id;
  @observable nome;
  @observable sigla;
  @observable cidade;
  @observable estado;
  @observable pais;
  @observable dataCriacao;

  static getDomainAttributes() {
    return ['id', 'nome', 'sigla', 'cidade', 'estado', 'pais','dataCriacao'];
  }
}

export default Time;
