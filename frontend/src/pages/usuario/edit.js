import PropTypes from 'prop-types';
import Form from './form';

export default function EditUsuario({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditUsuario.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
