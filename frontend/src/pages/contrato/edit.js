import PropTypes from 'prop-types';
import Form from './form';

export default function EditContrato({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditContrato.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
