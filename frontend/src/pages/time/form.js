import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import TimeFormStore from '../../stores/time/formStore';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import UrlRouter from '../../constants/UrlRouter';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';
import DadosEstaticosService from '../../services/DadosEstaticosService';
import { Dropdown } from 'primereact/dropdown';

@observer
class TimeFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.time.index);

    this.store = new TimeFormStore();
  }

  render() {
    const { updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Time de Futebol', url: UrlRouter.time.index },
      { label: this.props.action === 'new' ? 'Novo' : 'Editar' },
    ];

    if (this.store.object) {
      return (
        <>
          <BreadCrumb model={breacrumbItems} home={this.getHomeBreadCrumb()} />
          <div className="card page">
            <form onSubmit={submitFormData}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-4">
                <label {...validateField('nome')} htmlFor="nome">
                    Nome
                  </label>
                  <InputText
                    {...validateField('nome')}
                    onChange={(e) => this.store.updateAttribute('nome', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.nome}
                    id="nome"
                  />
                  {getFieldErrorMessage('nome')}
                </div>

                <div className="p-field p-col-4">
                  <label {...validateField('sigla')} htmlFor="sigla">
                    Sigla
                  </label>
                  <InputText
                    {...validateField('sigla')}
                    onChange={(e) => this.store.updateAttribute('sigla', e)}
                    placeholder="Digite uma valor"
                    value={this.store.object.sigla}
                    id="sigla"
                  />
                  {getFieldErrorMessage('sigla')}
                </div>

                <div className="p-field p-col-4">
                  <label {...validateField('dataCriacao')} htmlFor="dataCriacao">
                    Data de Criação
                  </label>
                  <Calendar
                    {...validateField('dataCriacao')}
                    onChange={(e) => updateAttributeDate('dataCriacao', e)}
                    placeholder="Selecione um valor"
                    value={this.getDateAttributeValue(this.store.object.dataCriacao)}
                    id="dataCriacao"
                  />
                  {getFieldErrorMessage('dataCriacao')}
                </div>

                <div className="p-field p-col-4">
                <label {...validateField('cidade')} htmlFor="cidade">
                    Cidade
                  </label>
                  <InputText
                    {...validateField('cidade')}
                    onChange={(e) => this.store.updateAttribute('cidade', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.cidade}
                    id="cidade"
                  />
                  {getFieldErrorMessage('cidade')}
                </div>

                <div className="p-field p-col-4">
                  <label {...validateField('estado')} htmlFor="estado">
                    Estado
                  </label>
                  <Dropdown
                    {...validateField('estado')}
                    onChange={(e) => this.store.updateAttribute('estado', e)}
                    value={this.store.object.estado}
                    placeholder="Selecione um valor"
                    options={DadosEstaticosService.getEstados()}
                    optionLabel="text"
                    id="estado"
                  />
                  {getFieldErrorMessage('estado')}
                </div>

                <div className="p-field p-col-4">
                <label {...validateField('pais')} htmlFor="pais">
                    País
                  </label>
                  <InputText
                    {...validateField('pais')}
                    onChange={(e) => this.store.updateAttribute('pais', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.pais}
                    id="pais"
                  />
                  {getFieldErrorMessage('pais')}
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

TimeFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default TimeFormPage;
