import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import VideoIndexStore from '../../stores/video/indexStore';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { BreadCrumb } from 'primereact/breadcrumb';
import UrlRouter from '../../constants/UrlRouter';
import GenericIndexPage from '../GenericIndexPage';
import { getValueDate } from '../../utils/utils';

@observer
class VideoIndexPage extends GenericIndexPage {
  constructor(props) {
    super(props);
    this.store = new VideoIndexStore();
  }

  render() { 
    const columns = [
      {
        field: 'id',
        header: 'ID',
        style: { width: '100px' },
      },
      {
        field: 'titulo',
        header: 'Título',
      },
      {
        field: 'descricao',
        header: 'Descrição',
      },
      {
        field: 'duracao',
        header: 'Duração',
      },
      {
        field: 'tamanhoArquivo',
        header: 'Tamanho do Arquivo',
      },
      {
        field: 'infantil',
        header: 'Conteúdo Infantil',
        body: ({ infantil }) => (infantil ? 'Sim' : 'Não'),
      },
      {
        field: 'dataPublicacao',
        header: 'Data de Publicação',
        body: ({ dataPublicacao }) => getValueDate(dataPublicacao),
      },
      {
        style: { width: '110px' },
        body: (rowData) => {
          return (
            <div className="actions">
              <Link to={UrlRouter.video.editar.replace(':id', rowData.id)}>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" />
              </Link>
              <Button
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger"
                onClick={() => this.confirmRemove(rowData.id)}
              />
            </div>
          );
        },
      },
    ];

    const header = (
      <div className="table-header">
        <Link to={UrlRouter.video.novo}>
          <Button className="p-button" label="Novo" icon={PrimeIcons.PLUS} />
        </Link>
        {/* TODO */}
        {/* <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText type="search" onInput={(e) => console.log(e.target.value)} placeholder="Buscar..." />
        </span> */}
      </div>
    );

    const { listKey, loading } = this.store;
    const { getDefaultTableProps } = this;

    const breacrumbItems = [{ label: 'Video' }];

    return (
      <>
        <BreadCrumb model={breacrumbItems} home={this.getHomeBreadCrumb()} />
        <div className="card page index-table">
          <DataTable value={listKey} header={header} loading={loading} {...getDefaultTableProps()}>
            {this.renderColumns(columns)}
          </DataTable>
        </div>
      </>
    );
  }
}

export default VideoIndexPage;
