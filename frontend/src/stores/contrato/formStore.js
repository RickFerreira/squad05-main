import Contrato from '../../domains/Contrato';
import ContratoService from '../../services/ContratoService';
import FormBase from '../FormBase';

class ContratoFormStore extends FormBase {
  constructor() {
    super(ContratoService, Contrato);
  }

  rulesDefinition() {
    return {
      titulo: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      descricao: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataVencimento: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default ContratoFormStore;
