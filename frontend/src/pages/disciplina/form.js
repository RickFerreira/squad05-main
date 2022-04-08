import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import DisciplinaFormStore from '../../stores/disciplina/formStore';
import { InputText } from 'primereact/inputtext';
import UrlRouter from '../../constants/UrlRouter';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';
import {InputTextarea} from 'primereact/inputtextarea';

@observer
class DisciplinaFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.disciplina.index);

    this.store = new DisciplinaFormStore();
  }

  render() {
    const { updateAttribute } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Disciplina', url: UrlRouter.disciplina.index },
      { label: this.props.action === 'new' ? 'Novo' : 'Editar' },
    ];

    if (this.store.object) {
      return (
        <>
          <BreadCrumb model={breacrumbItems} home={this.getHomeBreadCrumb()} />
          <div className="card page">
            <form onSubmit={submitFormData}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12">
                  <label {...validateField('nome')} htmlFor="nome">
                    Nome da Disciplina
                  </label>
                  <InputText
                    {...validateField('nome')}
                    onChange={(e) => updateAttribute('nome', e)}
                    placeholder="Digite o nome da Disciplina"
                    value={this.store.object.nome}
                    id="nome"
                  />
                  {getFieldErrorMessage('nome')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('ementa')} htmlFor="ementa">
                    Ementa
                  </label>
                  <InputTextarea
                    {...validateField('ementa')}
                    rows={5} cols={30} value={this.store.object.ementa} 
                    onChange={(e) => updateAttribute('ementa', e)}
                    autoResize
                    id="ementa" 
                  />
                  {getFieldErrorMessage('ementa')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('conteudoProgramatico')} htmlFor="conteudoProgramatico">
                    Conteúdo Programático
                  </label>
                  <InputTextarea
                    {...validateField('conteudoProgramatico')}
                    rows={5} cols={30} value={this.store.object.conteudoProgramatico} 
                    onChange={(e) => updateAttribute('conteudoProgramatico', e)}
                    autoResize
                    id="conteudoProgramatico" />
                  {getFieldErrorMessage('conteudoProgramatico')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('bibliografiaBasica')} htmlFor="bibliografiaBasica">
                    Bibliografia Básica
                  </label>
                  <InputTextarea
                    {...validateField('bibliografiaBasica')}
                    rows={5} cols={30} value={this.store.object.bibliografiaBasica} 
                    onChange={(e) => updateAttribute('bibliografiaBasica', e)}
                    autoResize
                    id="bibliografiaBasica" />
                  {getFieldErrorMessage('bibliografiaBasica')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('bibliografiaComplementar')} htmlFor="bibliografiaComplementar">
                    Bibliografia Complementar
                  </label>
                  <InputTextarea
                    {...validateField('bibliografiaComplementar')}
                    rows={5} cols={30} value={this.store.object.bibliografiaComplementar} 
                    onChange={(e) => updateAttribute('bibliografiaComplementar', e)}
                    autoResize
                    id="bibliografiaComplementar" />
                  {getFieldErrorMessage('bibliografiaComplementar')}
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

DisciplinaFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default DisciplinaFormPage;
