import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import ContratoFormStore from '../../stores/contrato/formStore';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import UrlRouter from '../../constants/UrlRouter';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from 'primereact/checkbox';

@observer
class ContratoFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.contrato.index);

    this.store = new ContratoFormStore();
  }

  componentDidMount() {
    const { id } = this.props;
    this.store.initialize(id, { permiteAditivo: false });
  }

  render() {
    const { updateAttribute, updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Contrato', url: UrlRouter.contrato.index },
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
                  <label {...validateField('titulo')} htmlFor="titulo">
                    Título
                  </label>
                  <InputText
                    {...validateField('titulo')}
                    onChange={(e) => updateAttribute('titulo', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.titulo}
                    id="titulo"
                  />
                  {getFieldErrorMessage('titulo')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('dataVencimento')} htmlFor="dataVencimento">
                    Data de Vencimento
                  </label>
                  <Calendar
                    {...validateField('dataVencimento')}
                    onChange={(e) => updateAttributeDate('dataVencimento', e)}
                    placeholder="Selecione um valor"
                    value={this.getDateAttributeValue(this.store.object.dataVencimento)}
                    id="dataVencimento"
                  />
                  {getFieldErrorMessage('dataVencimento')}
                </div>

                <div className="p-field p-col-12">
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

                <div className="p-field p-col-6">
                  <Checkbox
                    inputId="permiteAditivo"
                    checked={this.store.object.permiteAditivo}
                    onChange={(e) => this.store.updateAttributeCheckbox('permiteAditivo', e)}
                  />
                  <label className="checkbox-label" {...validateField('permiteAditivo')} htmlFor="permiteAditivo">
                    Permite Aditivo
                  </label>
                  {getFieldErrorMessage('permiteAditivo')}
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

ContratoFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default ContratoFormPage;
