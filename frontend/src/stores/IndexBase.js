import { makeObservable, observable, runInAction, action, computed } from 'mobx';
import { showErrorNotification, showNotification } from '../utils/utils';

class IndexBase {
  service;
  @observable list = [];
  @observable loading = false;
  @observable pagination = { total: 0, page: 1, itemsPerPage: 10 };

  constructor(service) {
    this.service = service;

    this.load = this.load.bind(this);
    this.reloadTableData = this.reloadTableData.bind(this);
    this.deleteRow = this.deleteRow.bind(this);

    makeObservable(this);
  }

  @action
  setPaginationPage(page) {
    this.pagination.page = page;
  }

  @computed
  get listKey() {
    return this.list.map((item, idx) => {
      if (!item.key) {
        item.key = idx;
      }
      return item;
    });
  }

  @action
  load(options = {}) {
    this.loading = true;
    this.service
      .get(options)
      .then((response) =>
        runInAction(() => {
          this.pagination.total = response.data.total;
          this.list = response.data.items;
        })
      )
      .catch((error) =>
        runInAction(() => {
          console.error(error);
          showErrorNotification(error);
        })
      )
      .finally(() =>
        runInAction(() => {
          this.loading = false;
        })
      );
  }

  @action
  reloadTableData() {
    this.pagination = { total: 0, page: 1, itemsPerPage: 10 };
    this.load();
  }

  @action
  deleteRow(id, callback) {
    this.loading = true;
    this.service
      .delete(id)
      .then((response) =>
        runInAction(() => {
          showNotification('success', null, 'Registro excluído com sucesso!');
          if (callback) {
            callback();
          }
        })
      )
      .catch((error) =>
        runInAction(() => {
          console.error(error);
          showErrorNotification(error);
        })
      )
      .finally(() =>
        runInAction(() => {
          this.loading = false;
        })
      );
  }
}

export default IndexBase;
