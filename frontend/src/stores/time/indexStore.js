import TimeService from '../../services/TimeService';
import IndexBase from '../IndexBase';

class TimeIndexStore extends IndexBase {
  constructor() {
    super(TimeService);
  }
}

export default TimeIndexStore;
