import Aluno from '../../domains/Aluno';
import AlunoService from '../../services/AlunoService';
import FormBase from '../FormBase';

class AlunoFormStore extends FormBase {
  constructor() {
    super(AlunoService, Aluno);
  }

  rulesDefinition() {
    return {
      nome: [{ rule: 'required', message: 'Por favor, preencha o campo'}],
      cpf: [{ rule: 'required', message: 'Por favor, preencha o campo'}],
      email: [{ rule: 'required', message: 'Por favor, preencha o campo'}],
      telefone: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataNascimento: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default AlunoFormStore;
