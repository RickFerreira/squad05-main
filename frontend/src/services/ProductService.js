import axios from 'axios';
import { ServiceBase } from './ServiceBase';

export class ProductService extends ServiceBase {
  constructor() {
    super('endpoint-customziado');
  }
  getProductsSmall() {
    return axios.get('assets/demo/data/products-small.json').then((res) => res.data.data);
  }

  getProducts() {
    return axios.get('assets/demo/data/products.json').then((res) => res.data.data);
  }

  getProductsWithOrdersSmall() {
    return axios.get('assets/demo/data/products-orders-small.json').then((res) => res.data.data);
  }
}
