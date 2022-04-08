import Tecnico from '../../domains/Tecnico';
import TecnicoService from '../../services/TecnicoService';
import FormBase from '../FormBase';

class TecnicoFormStore extends FormBase {
  constructor() {
    super(TecnicoService, Tecnico);
  }

  rulesDefinition() {
    return {
      nome: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      numTitulos: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataNascimento: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      estiloJogo: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default TecnicoFormStore;
