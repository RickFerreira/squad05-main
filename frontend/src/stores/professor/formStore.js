import Professor from '../../domains/Professor';
import ProfessorService from '../../services/ProfessorService';
import FormBase from '../FormBase';

class ProfessorFormStore extends FormBase {
  constructor() {
    super(ProfessorService, Professor);
  }

  rulesDefinition() {
    return {
      cpf: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataNascimento: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      email: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      nome: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      titulo: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      area: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default ProfessorFormStore;
