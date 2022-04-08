import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Campeonato extends DomainBase {
  @observable id;
  @observable nome;
  @observable descricao;
  @observable regras;
  @observable confederacaoOrganizadora;
  @observable ano;
  @observable dataInicio;
  @observable dataFim;

  static getDomainAttributes() {
    return ['id', 'nome', 'descricao', 'regras', 'confederacaoOrganizadora', 'ano', 'dataInicio', 'dataFim'];
  }
}

export default Campeonato;
