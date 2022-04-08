import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import moment from 'moment';
import { DATE_PARSE_FORMAT, DATE_PARSE_FORMAT_WITH_HOURS } from '../utils/date';
import { extractRules } from '../utils/formRules';
import { showErrorNotification, showNotification } from '../utils/utils';

class FormBase {
  service;
  domain;
  loadedObject = {};
  @observable object = {};
  @observable loading = false;

  constructor(service, domain) {
    this.service = service;
    this.domain = domain;

    this.updateAttribute = this.updateAttribute.bind(this);
    this.updateAttributeDate = this.updateAttributeDate.bind(this);
    this.getObjectToSave = this.getObjectToSave.bind(this);
    this.updateAttributeDateWithHours = this.updateAttributeDateWithHours.bind(this);

    makeObservable(this);
  }

  @action
  initialize(id, defaultValues = {}) {
    if (!id) {
      this.object = Object.assign({}, defaultValues);
    } else {
      this.loading = true;
      this.service
        .getById(id)
        .then((response) =>
          runInAction(() => {
            this.object = response.data;
            this.loadedObject = response.data;
          })
        )
        .catch((error) =>
          runInAction(() => {
            console.error(error);
          })
        )
        .finally(() =>
          runInAction(() => {
            this.loading = false;
          })
        );
    }
  }

  @action
  updateAttribute(attribute, event) {
    let value = event;
    if (event && event.target) {
      value = event.target.value;
    }
    this.object[attribute] = value;
  }

  @action
  updateAttributeCheckbox(attribute, e) {
    this.object[attribute] = e.checked;
  }

  @action
  updateAttributeDate(attribute, e) {
    let value = e;
    if (e && e.target) {
      value = e.target.value;
    }
    this.object[attribute] = value ? moment(value).format(DATE_PARSE_FORMAT) : value;
  }

  @action
  updateAttributeDateWithHours(attribute, e) {
    let value = e;
    if (e && e.target) {
      value = e.target.value;
    }
    this.object[attribute] = value ? moment(value).format(DATE_PARSE_FORMAT_WITH_HOURS) : value;
  }

  getObjectToSave(actionType) {
    const { object, loadedObject } = this;
    if (actionType === 'edit') {
      const objToSave = {};
      Object.keys(loadedObject).forEach((key) => {
        if (object[key] !== loadedObject[key]) {
          objToSave[key] = object[key];
        }
      });
      return objToSave;
    } else {
      return object;
    }
  }

  @action
  save(callback, type = 'edit') {
    this.loading = true;
    const saveObject = this.getObjectToSave(type);
    if (Object.keys(saveObject).length === 0) {
      showNotification('warn', null, 'Nenhuma alteração realizada.');
    } else {
      this.service
        .save(this.object, type, this.object.id)
        .then((response) =>
          runInAction(() => {
            if (callback) {
              callback();
            }
            showNotification('success', null, 'Registro salvo com sucesso!');
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

  rulesDefinition() {
    console.warn('Subscribe the rulesDefinition function.');
    return {};
  }

  @computed
  get rules() {
    const definition = this.rulesDefinition();
    const result = extractRules(definition, this.object);
    Object.keys(result).forEach((key) => {
      const error = result[key].error;
      if (error) {
        result.hasError = true;
      }
    });
    return result;
  }
}

export default FormBase;
