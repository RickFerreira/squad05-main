import PropTypes from 'prop-types';
import Form from './form';

export default function EditProfessor({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditProfessor.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
