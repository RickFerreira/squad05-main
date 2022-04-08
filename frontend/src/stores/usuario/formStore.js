import Usuario from '../../domains/Usuario';
import UsuarioService from '../../services/UsuarioService';
import FormBase from '../FormBase';

class UsuarioFormStore extends FormBase {
  constructor() {
    super(UsuarioService, Usuario);
  }

  rulesDefinition() {
    return {
      nome: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      email: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      nomeCanal: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
      dataNascimento: [{ rule: 'required', message: 'Por favor, preencha o campo' }],
    };
  }
}

export default UsuarioFormStore;
