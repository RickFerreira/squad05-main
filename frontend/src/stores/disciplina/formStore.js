import Disciplina from '../../domains/Disciplina';
import DisciplinaService from '../../services/DisciplinaService';
import FormBase from '../FormBase';

class DisciplinaFormStore extends FormBase {
  constructor() {
    super(DisciplinaService, Disciplina);
  }

  rulesDefinition() {
    return {
      nome: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      ementa: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      conteudoProgramatico: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      bibliografiaBasica: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      bibliografiaComplementar: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default DisciplinaFormStore;
