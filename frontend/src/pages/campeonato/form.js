import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import CampeonatoFormStore from '../../stores/campeonato/formStore';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import UrlRouter from '../../constants/UrlRouter';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputTextarea } from 'primereact/inputtextarea';

@observer
class CampeonatoFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.campeonato.index);

    this.store = new CampeonatoFormStore();
  }

  render() {
    const { updateAttribute, updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Campeonato', url: UrlRouter.campeonato.index },
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
                <label {...validateField('regras')} htmlFor="regras">
                Regras
                  </label>
                  <InputText
                    {...validateField('regras')}
                    onChange={(e) => updateAttribute('regras', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.regras}
                    id="regras"
                  />
                  {getFieldErrorMessage('regras')}
                </div>

                <div className="p-field p-col-3">
                <label {...validateField('confederacaoOrganizadora')} htmlFor="confederacaoOrganizadora">
                Confederação Organizadora
                  </label>
                  <InputText
                    {...validateField('confederacaoOrganizadora')}
                    onChange={(e) => updateAttribute('confederacaoOrganizadora', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.confederacaoOrganizadora}
                    id="confederacaoOrganizadora"
                  />
                  {getFieldErrorMessage('confederacaoOrganizadora')}
                </div>

                <div className="p-field p-col-3">
                <label {...validateField('ano')} htmlFor="ano">
                Ano
                  </label>
                  <InputText
                    {...validateField('ano')}
                    onChange={(e) => updateAttribute('ano', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.ano}
                    id="ano"
                  />
                  {getFieldErrorMessage('ano')}
                </div>

                <div className="p-field p-col-3">
                <label {...validateField('dataInicio')} htmlFor="dataInicio">
                    Data de Início
                  </label>
                  <Calendar
                    {...validateField('dataInicio')}
                    onChange={(e) => updateAttributeDate('dataInicio', e)}
                    placeholder="Selecione um valor"
                    value={this.getDateAttributeValue(this.store.object.dataInicio)}
                    id="dataInicio"
                  />
                  {getFieldErrorMessage('dataInicio')}
                </div>

                <div className="p-field p-col-3">
                <label {...validateField('dataFim')} htmlFor="dataFim">
                    Data de Fim
                  </label>
                  <Calendar
                    {...validateField('dataFim')}
                    onChange={(e) => updateAttributeDate('dataFim', e)}
                    placeholder="Selecione um valor"
                    value={this.getDateAttributeValue(this.store.object.dataFim)}
                    id="dataFim"
                  />
                  {getFieldErrorMessage('dataFim')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('descricao')} htmlFor="descricao">
                    Descrição
                  </label>
                  <InputTextarea
                    {...validateField('descricao')}
                    rows={5}
                    cols={30}
                    value={this.store.object.descricao}
                    onChange={(e) => updateAttribute('descricao', e)}
                    id="descricao"
                  />
                  {getFieldErrorMessage('descricao')}
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

CampeonatoFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default CampeonatoFormPage;
