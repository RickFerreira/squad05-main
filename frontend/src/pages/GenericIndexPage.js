import React from 'react';
import { observer } from 'mobx-react';
import { Column } from 'primereact/column';
import { confirmDialog } from 'primereact/confirmdialog';
import UrlRouter from '../constants/UrlRouter';

@observer
class GenericIndexPage extends React.Component {
  store;
  defaultTableProps;
  constructor(props) {
    super(props);

    this.onPage = this.onPage.bind(this);
    this.getDefaultTableProps = this.getDefaultTableProps.bind(this);
  }

  componentDidMount() {
    this.store.load();
  }

  renderColumns(columns) {
    return columns.map((col) => <Column key={`col-${col.field}`} {...col} />);
  }

  onPage(event) {
    const page = (event.page ?? 0) + 1;
    this.store.setPaginationPage(page);
    this.store.load({ 'page.index': page });
  }

  getFirstFromPagination() {
    const { itemsPerPage, page } = this.store.pagination;
    return itemsPerPage * (page - 1);
  }

  confirmRemove(id) {
    const { deleteRow, reloadTableData } = this.store;
    confirmDialog({
      message: 'Você realmente deseja excluir o registro selecionado?',
      header: 'Excluir registro',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-danger',
      accept: () => deleteRow(id, reloadTableData),
    });
  }

  getHomeBreadCrumb() {
    return { icon: 'pi pi-home', url: UrlRouter.home };
  }

  getDefaultTableProps() {
    return {
      dataKey: 'id',
      className: 'datatable-responsive',
      paginator: true,
      lazy: true,
      rows: 10,
      emptyMessage: 'Nenhum dado encontrado.',
      onPage: this.onPage,
      first: this.getFirstFromPagination(),
      totalRecords: this.store.pagination.total,
    };
  }
}

export default GenericIndexPage;
