import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import VideoFormStore from '../../stores/video/formStore';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import UrlRouter from '../../constants/UrlRouter';
import GenericFormPage from '../GenericFormPage';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from 'primereact/checkbox';

@observer
class VideoFormPage extends GenericFormPage {
  constructor(props) {
    super(props, UrlRouter.video.index);

    this.store = new VideoFormStore();
  }

  componentDidMount() {
    const { id } = this.props;
    this.store.initialize(id, { infantil: false });
  }

  render() {
    const { updateAttribute, updateAttributeDate } = this.store;
    const { validateField, getFieldErrorMessage, submitFormData } = this;

    const breacrumbItems = [
      { label: 'Video', url: UrlRouter.video.index },
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
                  <label {...validateField('dataPublicacao')} htmlFor="dataPublicacao">
                    Data de Publicação
                  </label>
                  <Calendar
                    {...validateField('dataPublicacao')}
                    onChange={(e) => updateAttributeDate('dataPublicacao', e)}
                    placeholder="Selecione um valor"
                    value={this.getDateAttributeValue(this.store.object.dataPublicacao)}
                    id="dataPublicacao"
                  />
                  {getFieldErrorMessage('dataPublicacao')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('duracao')} htmlFor="duracao">
                    Duração (em segundos)
                  </label>

                  <InputNumber
                    {...validateField('duracao')}
                    onValueChange={(e) => updateAttribute('duracao', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.duracao}
                    id="duracao"
                  />
                  {getFieldErrorMessage('duracao')}
                </div>

                <div className="p-field p-col-6">
                  <label {...validateField('tamanhoArquivo')} htmlFor="tamanhoArquivo">
                    Tamanho do Arquivo (em bytes)
                  </label>
                  <InputNumber
                    {...validateField('tamanhoArquivo')}
                    onValueChange={(e) => updateAttribute('tamanhoArquivo', e)}
                    placeholder="Digite um valor"
                    value={this.store.object.tamanhoArquivo}
                    id="tamanhoArquivo"
                  />
                  {getFieldErrorMessage('tamanhoArquivo')}
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
                    inputId="infantil"
                    checked={this.store.object.infantil}
                    onChange={(e) => this.store.updateAttributeCheckbox('infantil', e)}
                  />
                  <label className="checkbox-label" {...validateField('infantil')} htmlFor="infantil">
                    Conteúdo Infantil
                  </label>
                  {getFieldErrorMessage('infantil')}
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

VideoFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default VideoFormPage;
