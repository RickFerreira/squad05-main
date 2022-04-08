import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class TimeService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.time);
  }
}

const instance = new TimeService();

export default instance;
