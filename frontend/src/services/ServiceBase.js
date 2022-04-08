import axios from 'axios';
import { buildRequestParams, showNotification } from '../utils/utils';

export class ServiceBase {
  baseUrl = process.env.REACT_APP_API_URL;
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  get(options = {}) {
    const requestParams = buildRequestParams(options);
    return axios.get(
      `${this.baseUrl}/${this.endpoint}?page.index=${requestParams['page.index']}&page.size=${requestParams['page.size']}`
    );
  }

  getById(id) {
    return axios.get(`${this.baseUrl}/${this.endpoint}/${id}`);
  }

  save(object, type = 'edit', id = null) {
    if (type === 'edit') {
      if (!id) {
        showNotification('error', null, 'Identificador inválido encontrado ao salvar alterações.');
      }
      return this.update(object, id);
    } else {
      return this.create(object);
    }
  }

  update(object, id) {
    return axios.patch(`${this.baseUrl}/${this.endpoint}/${id}`, object);
  }

  create(object) {
    return axios.post(`${this.baseUrl}/${this.endpoint}`, object);
  }

  delete(id) {
    return axios.delete(`${this.baseUrl}/${this.endpoint}/${id}`);
  }
}
