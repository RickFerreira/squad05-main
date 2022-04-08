import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import moment from 'moment';
import UrlRouter from '../constants/UrlRouter';
import { showNotification } from '../utils/utils';

@observer
class GenericFormPage extends React.Component {
  store;
  goBackUrl;
  constructor(props, goBackUrl) {
    super(props);
    this.goBackUrl = goBackUrl;

    this.state = {
      submitted: false,
    };

    this._goBack = this._goBack.bind(this);
    this.renderActionButtons = this.renderActionButtons.bind(this);
    this.submitFormData = this.submitFormData.bind(this);
    this.validateField = this.validateField.bind(this);
    this.getFieldErrorMessage = this.getFieldErrorMessage.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.store.initialize(id);
  }

  submitFormData(e) {
    e && e.preventDefault();
    const execution = () => {
      if (!this.store.rules.hasError) {
        this.store.save(this._goBack, this.props.action);
      } else {
        showNotification('error', null, 'Verifique os campos do formulário!');
      }
    };

    if (this.state.submitted) {
      execution();
    } else {
      this.setState({ submitted: true }, execution);
    }
  }

  validateField(field) {
    return this.store.rules[field] && this.store.rules[field].error && this.state.submitted
      ? { className: 'p-invalid p-error' }
      : {};
  }

  getFieldErrorMessage(field) {
    if (this.store.rules[field] && this.store.rules[field].error && this.state.submitted) {
      return <small className="p-error">{this.store.rules[field].message}</small>;
    }
    return null;
  }

  _goBack() {
    this.props.history.push(this.goBackUrl);
  }

  getDateAttributeValue(value) {
    return value ? moment(value).toDate() : value;
  }

  getHomeBreadCrumb() {
    return { icon: 'pi pi-home', url: UrlRouter.home };
  }

  renderActionButtons() {
    return (
      <div className="p-mt-10 form-actions">
        <Divider />
        <span className="p-d-flex">
          <Button
            label="Voltar"
            type="button"
            className="p-ml-auto p-button-secondary p-mr-2"
            onClick={() => this._goBack()}
          />
          <Button label="Salvar" type="submit" />
        </span>
      </div>
    );
  }
}

GenericFormPage.propTypes = {
  id: PropTypes.any,
  action: PropTypes.any,
  history: PropTypes.any,
};

export default GenericFormPage;
