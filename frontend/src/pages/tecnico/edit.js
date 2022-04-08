import PropTypes from 'prop-types';
import Form from './form';

export default function EditTecnico({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditTecnico.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
