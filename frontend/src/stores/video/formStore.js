import Video from '../../domains/Video';
import VideoService from '../../services/VideoService';
import FormBase from '../FormBase';

class VideoFormStore extends FormBase {
  constructor() {
    super(VideoService, Video);
  }


  rulesDefinition() {
    return {
      titulo: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      descricao: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      duracao: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      tamanhoArquivo: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataPublicacao: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default VideoFormStore;
