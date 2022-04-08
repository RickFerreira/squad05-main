import { observable } from 'mobx';
import DomainBase from './DomainBase';

class Video extends DomainBase {
  @observable id;
  @observable titulo;
  @observable descricao;
  @observable duracao;
  @observable tamanhoArquivo;
  @observable infantil;
  @observable dataPublicacao;

  static getDomainAttributes() {
    return ['id', 'titulo', 'descricao', 'duracao', 'tamanhoArquivo', 'infantil', 'dataPublicacao']
  }
}

export default Video;
