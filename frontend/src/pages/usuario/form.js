import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import UsuarioFormStore from '../../stores/usuario/formStore';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import UrlRouter from '../../constants/UrlRouter';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';

@observer
class UsuarioFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.usuario.index);

    this.store = new UsuarioFormStore();
  }

  render() {
    const { updateAttribute, updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Usuário', url: UrlRouter.usuario.index },
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
                    placeholder="Nome"
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
                    placeholder="Email"
                    value={this.store.object.email}
                    id="email"
                  />
                  {getFieldErrorMessage('email')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('nomeCanal')} htmlFor="nomeCanal">
                    Nome do Canal
                  </label>
                  <InputText
                    {...validateField('nomeCanal')}
                    onChange={(e) => updateAttribute('nomeCanal', e)}
                    placeholder="Nome do Canal"
                    value={this.store.object.nomeCanal}
                    id="nomeCanal"
                  />
                  {getFieldErrorMessage('nomeCanal')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('dataNascimento')} htmlFor="dataNascimento">
                    Data de Nascimento
                  </label>
                  <Calendar
                    {...validateField('dataNascimento')}
                    monthNavigator
                    yearNavigator
                    yearRange="1900:2030"
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

UsuarioFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default UsuarioFormPage;
