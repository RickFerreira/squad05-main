import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import TecnicoIndexStore from '../../stores/tecnico/indexStore';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { BreadCrumb } from 'primereact/breadcrumb';
import UrlRouter from '../../constants/UrlRouter';
import GenericIndexPage from '../GenericIndexPage';
import { getValueDate } from '../../utils/utils';

@observer
class TecnicoIndexPage extends GenericIndexPage {
  constructor(props) {
    super(props);
    this.store = new TecnicoIndexStore();
  }

  render() {
    const columns = [
      {
        field: 'id',
        header: 'ID',
        style: { width: '100px' },
      },
      {
        field: 'nome',
        header: 'Nome',
      },
      {
        field: 'numTitulos',
        header: 'Número de Títulos',
      },
      {
        field: 'dataNascimento',
        header: 'Data de Nascimento',
        body: ({ dataNascimento }) => getValueDate(dataNascimento),
      },
      {
        field: 'estiloJogo',
        header: 'Estilo de jogo',
      },
      {
        style: { width: '110px' },
        body: (rowData) => {
          return (
            <div className="actions">
              <Link to={UrlRouter.tecnico.editar.replace(':id', rowData.id)}>
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
        <Link to={UrlRouter.tecnico.novo}>
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

    const breacrumbItems = [{ label: 'Tecnico' }];

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

export default TecnicoIndexPage;
