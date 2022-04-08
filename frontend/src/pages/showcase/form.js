import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import ComissaoFormStore from '../../stores/showcase/formStore';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import UrlRouter from '../../constants/UrlRouter';
import DadosEstaticosService from '../../services/DadosEstaticosService';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';

@observer
class ComissaoFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.comissao.index);

    this.store = new ComissaoFormStore();
  }

  render() {
    const { updateAttribute, updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Comissão', url: UrlRouter.comissao.index },
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
                  <label {...validateField('tipo')} htmlFor="tipo">
                    Tipo
                  </label>
                  <Dropdown
                    {...validateField('tipo')}
                    onChange={(e) => updateAttribute('tipo', e)}
                    value={this.store.object.tipo}
                    placeholder="Selecione um valor"
                    options={DadosEstaticosService.getTipoComissao()}
                    optionLabel="text"
                    id="tipo"
                  />
                  {getFieldErrorMessage('tipo')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('numero')} htmlFor="numero">
                    Número
                  </label>
                  <InputText
                    {...validateField('numero')}
                    onChange={(e) => this.store.updateAttribute('numero', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.numero}
                    id="numero"
                  />
                  {getFieldErrorMessage('numero')}
                </div>

                <div className="p-field p-col-3">
                  <label {...validateField('dataVigenciaInicial')} htmlFor="dataVigenciaInicial">
                    Data Vigência Inicial
                  </label>
                  <Calendar
                    {...validateField('dataVigenciaInicial')}
                    onChange={(e) => updateAttributeDate('dataVigenciaInicial', e)}
                    placeholder="Selecione um valor"
                    value={this.getDateAttributeValue(this.store.object.dataVigenciaInicial)}
                    id="dataVigenciaInicial"
                  />
                  {getFieldErrorMessage('dataVigenciaInicial')}
                </div>

                <div className="p-field p-col-3">
                  <label {...validateField('dataVigenciaFinal')} htmlFor="dataVigenciaFinal">
                    Data Vigência Final
                  </label>
                  <Calendar
                    {...validateField('dataVigenciaFinal')}
                    onChange={(e) => this.store.updateAttributeDate('dataVigenciaFinal', e)}
                    placeholder="Selecione um valor"
                    value={this.getDateAttributeValue(this.store.object.dataVigenciaFinal)}
                    id="dataVigenciaFinal"
                  />
                  {getFieldErrorMessage('dataVigenciaFinal')}
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

ComissaoFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default ComissaoFormPage;
