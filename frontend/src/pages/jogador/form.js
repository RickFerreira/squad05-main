import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import JogadorFormStore from '../../stores/jogador/formStore';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import UrlRouter from '../../constants/UrlRouter';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import DadosEstaticosService from '../../services/DadosEstaticosService';

@observer
class JogadorFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.jogador.index);

    this.store = new JogadorFormStore();
  }

  render() {
    const { updateAttribute, updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Jogador', url: UrlRouter.jogador.index },
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
                <label {...validateField('nacionalidade')} htmlFor="nacionalidade">
                    Nacionalidade
                  </label>
                  <InputText
                    {...validateField('nacionalidade')}
                    onChange={(e) => updateAttribute('nacionalidade', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.nacionalidade}
                    id="nacionalidade"
                  />
                  {getFieldErrorMessage('nacionalidade')}
                </div>

                <div className="p-field p-col-6">
                <label {...validateField('posicao')} htmlFor="posicao">
                    Posição
                  </label>
                  <Dropdown
                    {...validateField('posicao')}
                    onChange={(e) => updateAttribute('posicao', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.posicao}
                    id="posicao"
                    optionLabel="text"
                    optionValue="value"
                    options={DadosEstaticosService.getPosicao()}
                  />
                  {getFieldErrorMessage('posicao')}
                </div>

                <div className="p-field p-col-6">
                <label {...validateField('peChute')} htmlFor="peChute">
                    Pé
                  </label>
                  <Dropdown
                    {...validateField('peChute')}
                    onChange={(e) => updateAttribute('peChute', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.peChute}
                    id="peChute"
                    optionLabel="text"
                    optionValue="value"
                    options={DadosEstaticosService.getPeChute()}
                  />
                  {getFieldErrorMessage('peChute')}
                </div>

                <div className="p-field p-col-6">
                <label {...validateField('altura')} htmlFor="altura">
                    Altura
                  </label>
                  <InputNumber
                    {...validateField('altura')}
                    onValueChange={(e) => updateAttribute('altura', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.altura}
                    id="altura"
                  />
                  {getFieldErrorMessage('altura')}
                </div>

                <div className="p-field p-col-6">
                <label {...validateField('massa')} htmlFor="massa">
                    Massa
                  </label>
                  <InputNumber
                    {...validateField('massa')}
                    onValueChange={(e) => updateAttribute('massa', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.massa}
                    id="massa"
                  />
                  {getFieldErrorMessage('massa')}
                </div>

                <div className="p-field p-col-6">
                <label {...validateField('dataNascimento')} htmlFor="dataNascimento">
                    Nascimento
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

JogadorFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default JogadorFormPage;
