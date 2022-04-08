import Campeonato from '../../domains/Campeonato';
import CampeonatoService from '../../services/CampeonatoService';
import FormBase from '../FormBase';

class CampeonatoFormStore extends FormBase {
  constructor() {
    super(CampeonatoService, Campeonato);
  }

  rulesDefinition() {
    return {
      nome: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      descricao: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      regras: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      confederacaoOrganizadora: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      ano: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataInicio: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataFim: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default CampeonatoFormStore;
