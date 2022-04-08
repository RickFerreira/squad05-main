import Comissao from '../../domains/Comissao';
import ComissaoService from '../../services/ComissaoService';
import FormBase from '../FormBase';

class ComissaoFormStore extends FormBase {
  constructor() {
    super(ComissaoService, Comissao);
  }

  rulesDefinition() {
    return {
      tipo: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      numero: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataVigenciaInicial: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataVigenciaFinal: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default ComissaoFormStore;
