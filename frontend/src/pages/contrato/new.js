import PropTypes from 'prop-types';
import Form from './form';

export default function NewContrato({ history, match }) {
  return <Form history={history} action="new" />;
}

NewContrato.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
