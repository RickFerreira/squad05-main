import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import AlunoFormStore from '../../stores/aluno/formStore';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import UrlRouter from '../../constants/UrlRouter';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputMask } from 'primereact/inputmask';

@observer
class AlunoFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.aluno.index);

    this.store = new AlunoFormStore();
  }

  render() {
    const { updateAttribute, updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Aluno', url: UrlRouter.aluno.index },
      { label: this.props.action === 'new' ? 'Novo' : 'Editar' },
    ];

    if (this.store.object) {
      return (
        <>
          <BreadCrumb model={breacrumbItems} home={this.getHomeBreadCrumb()} />
          <div className="card page">
            <form onSubmit={submitFormData}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-6">
                  <label {...validateField('nome')} htmlFor="nome">
                    Nome
                  </label>
                  <InputText
                    {...validateField('nome')}
                    onChange={(e) => updateAttribute('nome', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.nome}
                    id="nome"
                  />
                  {getFieldErrorMessage('nome')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('email')} htmlFor="email">
                    Email
                  </label>
                  <InputText
                    {...validateField('email')}
                    onChange={(e) => updateAttribute('email', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.email}
                    id="email"
                  />
                  {getFieldErrorMessage('email')}
                </div>

                <div className="p-field p-col-4">
                  <label {...validateField('cpf')} htmlFor="cpf">
                    CPF
                  </label>
                  <InputMask
                    {...validateField('cpf')}
                    mask="999.999.999-99"
                    onChange={(e) => updateAttribute('cpf', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.cpf}
                    id="cpf"
                  />
                  {getFieldErrorMessage('cpf')}
                </div>

                <div className="p-field p-col-4">
                  <label {...validateField('telefone')} htmlFor="telefone">
                    Telefone
                  </label>
                  <InputMask
                    {...validateField('telefone')}
                    mask="(99) 99999-9999"
                    onChange={(e) => updateAttribute('telefone', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.telefone}
                    id="telefone"
                  />
                  {getFieldErrorMessage('telefone')}
                </div>

                <div className="p-field p-col-4">
                  <label {...validateField('dataNascimento')} htmlFor="dataNascimento">
                    Data de Nascimento
                  </label>
                  <Calendar
                    {...validateField('dataNascimento')}
                    onChange={(e) => updateAttributeDate('dataNascimento', e)}
                    placeholder="Selecione um valor"
                    value={this.getDateAttributeValue(this.store.object.dataNascimento)}
                    id="dataNascimento"
                  />
                  {getFieldErrorMessage('dataNascimento')}
                </div>

              </div>
              {this.renderActionButtons()}
            </form>
          </div>
        </>
      );
    } else {
      return (
        <div className="card page">
          <BreadCrumb model={breacrumbItems} home={this.getHomeBreadCrumb()} />
          <i className="pi pi-spin pi-spinner" style={{ fontSize: '2em' }}></i>
        </div>
      );
    }
  }
}

AlunoFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default AlunoFormPage;
