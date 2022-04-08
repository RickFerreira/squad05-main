class DomainBase {
  constructor(object) {
    if (object) {
      for (let key in this) {
        this[key] = object[key];
      }
    }
  }

  static getDomainAttributes() {
    throw new Error('Override this function');
  }
}

export default DomainBase;
