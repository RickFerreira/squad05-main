import Time from '../../domains/Time';
import TimeService from '../../services/TimeService';
import FormBase from '../FormBase';

class TimeFormStore extends FormBase {
  constructor() {
    super(TimeService, Time);
  }

  rulesDefinition() {
    return {
      nome: [{rule: 'required', message: 'Por favor, preencha o campo'}],
      sigla: [{rule: 'required', message: 'Por favor, preencha o campo'}],
      cidade: [{rule: 'required', message: 'Por favor, preencha o campo'}],
      estado: [{rule: 'required', message: 'Por favor, preencha o campo'}],
      pais: [{rule: 'required', message: 'Por favor, preencha o campo'}],
      dataCriacao: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default TimeFormStore;
