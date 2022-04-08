import Jogador from '../../domains/Jogador';
import JogadorService from '../../services/JogadorService';
import FormBase from '../FormBase';

class JogadorFormStore extends FormBase {
  constructor() {
    super(JogadorService, Jogador);
  }

  rulesDefinition() {
    return {
      nome: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      nacionalidade: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      posicao: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      peChute: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      altura: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      massa: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataNascimento: [{ rule: 'required', message: 'Por favor, preencha o campo' }]
    };
  }
}

export default JogadorFormStore;
