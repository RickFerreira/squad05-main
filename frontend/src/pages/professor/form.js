import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import ProfessorFormStore from '../../stores/professor/formStore';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import UrlRouter from '../../constants/UrlRouter';
import DadosEstaticosService from '../../services/DadosEstaticosService';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';

@observer
class ProfessorFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.professor.index);

    this.store = new ProfessorFormStore();
  }

  render() {
    const { updateAttribute, updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Professor', url: UrlRouter.professor.index },
      { label: this.props.action === 'new' ? 'Novo' : 'Editar' },
    ];

    if (this.store.object) {
      return (
        <>
          <BreadCrumb model={breacrumbItems} home={this.getHomeBreadCrumb()} />
          <div className="card page">
            <form onSubmit={submitFormData}>
              <div className="p-fluid p-formgrid p-grid">

                <div className="p-field p-col-3">
                  <label {...validateField('cpf')} htmlFor="cpf">
                    CPF
                  </label>
                  <InputText
                    {...validateField('cpf')}
                    onChange={(e) => updateAttribute('cpf', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.cpf}
                    id="cpf"
                  />
                  {getFieldErrorMessage('cpf')}
                </div>

                <div className="p-field p-col-3">
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
                <div className="p-field p-col-3">
                  <label {...validateField('titulo')} htmlFor="titulo">
                    Título
                  </label>
                  <Dropdown
                    {...validateField('titulo')}
                    onChange={(e) => updateAttribute('titulo', e)}
                    value={this.store.object.titulo}
                    placeholder="Selecione um valor"
                    options={DadosEstaticosService.getTituloProfessor()}
                    optionLabel="text"
                    id="titulo"
                  />
                  {getFieldErrorMessage('titulo')}
                </div>

                <div className="p-field p-col-3">
                  <label {...validateField('area')} htmlFor="area">
                    Área
                  </label>
                  <InputText
                    {...validateField('area')}
                    onChange={(e) => updateAttribute('area', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.area}
                    id="area"
                  />
                  {getFieldErrorMessage('area')}
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

ProfessorFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default ProfessorFormPage;
