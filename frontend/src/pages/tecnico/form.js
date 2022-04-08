import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import  TecnicoFormStore from '../../stores/tecnico/formStore';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import UrlRouter from '../../constants/UrlRouter';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputNumber } from 'primereact/inputnumber';

@observer
class TecnicoFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.tecnico.index);

    this.store = new TecnicoFormStore();
  }

  render() {
    const { updateAttribute, updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Tecnico', url: UrlRouter.tecnico.index },
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
                    onChange={(e) => updateAttribute('nome', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.nome}
                    id="nome"
                  />
                  {getFieldErrorMessage('nome')}
                </div>

                <div className="p-field p-col-4">
                  <label {...validateField('numTitulos')} htmlFor="numTitulos">
                    Número de títulos
                  </label>
                  <InputNumber
                    {...validateField('numTitulos')}
                    onValueChange={(e) => updateAttribute('numTitulos', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.numTitulos}
                    id="numTitulos"
                  />
                  {getFieldErrorMessage('numTitulos')}
                </div>

                <div className="p-field p-col-4">
                  <label {...validateField('estiloJogo')} htmlFor="estiloJogo">
                    Estilo de jogo
                  </label>
                  <InputText
                    {...validateField('estiloJogo')}
                    onChange={(e) => updateAttribute('estiloJogo', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.estiloJogo}
                    id="estiloJogo"
                  />
                  {getFieldErrorMessage('estiloJogo')}
                </div>

                <div className="p-field p-col-6">
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

TecnicoFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default TecnicoFormPage;
