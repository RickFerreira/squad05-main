import { action, makeObservable } from 'mobx';

class AppStore {
  notificationRefFunction;

  constructor() {
    makeObservable(this);
  }

  @action
  setNotificationRefFunction(refFunction) {
    this.notificationRefFunction = refFunction;
  }
}

export default new AppStore();
