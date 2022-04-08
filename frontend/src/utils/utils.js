import moment from 'moment';
import AppStore from '../stores/AppStore';
import { DATE_FORMAT, DATE_PARSE_FORMAT } from './date';

export const buildRequestParams = (params = {}) => {
  const paramKeys = ['page.index', 'page.size', 'sort.by', 'sort.order'];
  const defaultValues = {
    'page.index': 1,
    'page.size': 10,
  };
  paramKeys.forEach((param) => {
    if (Object.keys(params).includes(param)) {
      defaultValues[param] = params[param];
    }
  });
  return defaultValues;
};

export const showNotification = (severity = 'info', summary = null, detail = null) => {
  const ref = AppStore.notificationRefFunction();
  ref.show({ severity, summary, detail });
};

export const showErrorNotification = (error) => {
  let message = 'Ocorreu um erro!';
  if (
    error.response &&
    error.response.data &&
    error.response.data.messages &&
    error.response.data.messages.length > 0
  ) {
    message = error.response.data.messages.join('; ');
  }
  showNotification('error', null, message);
};

export const getValueByKey = (value, list = [], key = 'value', label = 'text') => {
  let result = '-';
  const filtered = list.filter((item) => item[key] === value);
  if (filtered.length > 0) {
    result = filtered[0][label];
  }
  return result;
};

export const getValueDate = (value, formatter = DATE_FORMAT, parser = DATE_PARSE_FORMAT) => {
  return moment(value, parser).format(formatter);
};
