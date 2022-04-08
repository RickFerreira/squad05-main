import PropTypes from 'prop-types';
import Form from './form';

export default function NewUsuario({ history, match }) {
  return <Form history={history} action="new" />;
}

NewUsuario.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
