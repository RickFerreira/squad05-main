import { ServiceBase } from './ServiceBase';
import ApiEndpoints from '../constants/ApiEndpoints';

class VideoService extends ServiceBase {
  constructor() {
    super(ApiEndpoints.video);
  }
}

const instance = new VideoService();

export default instance;
