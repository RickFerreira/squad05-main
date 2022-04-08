import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import ProfessorIndexStore from '../../stores/professor/indexStore';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { BreadCrumb } from 'primereact/breadcrumb';
import UrlRouter from '../../constants/UrlRouter';
import GenericIndexPage from '../GenericIndexPage';
import { getValueDate, getValueByKey } from '../../utils/utils';
import DadosEstaticosService from '../../services/DadosEstaticosService';


@observer
class ProfessorIndexPage extends GenericIndexPage {
  constructor(props) {
    super(props);
    this.store = new ProfessorIndexStore();
  }

  render() {
    const columns = [
      {
        field: 'id',
        header: 'ID',
        style: { width: '100px' },
      },
      {
        field: 'cpf',
        header: 'CPF',
      },
      {
        field: 'dataNascimento',
        header: 'Data de nascimento',
        body: ({ dataNascimento }) => getValueDate(dataNascimento),
      },
      {
        field: 'email',
        header: 'Email',
        
      },
      {
        field: 'nome',
        header: 'Nome',
        
      },
      {
        field: 'titulo',
        header: 'Título',
        body: (rowData) => getValueByKey(rowData.titulo, DadosEstaticosService.getTituloProfessor()),
        
      },
      {
        field: 'area',
        header: 'Área',
        
      },
      {
        style: { width: '110px' },
        body: (rowData) => {
          return (
            <div className="actions">
              <Link to={UrlRouter.professor.editar.replace(':id', rowData.id)}>
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
        <Link to={UrlRouter.professor.novo}>
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

    const breacrumbItems = [{ label: 'Professor' }];

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

export default ProfessorIndexPage;
