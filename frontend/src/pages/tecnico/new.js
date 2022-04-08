import PropTypes from 'prop-types';
import Form from './form';

export default function NewTecnico({ history, match }) {
  return <Form history={history} action="new" />;
}

NewTecnico.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
