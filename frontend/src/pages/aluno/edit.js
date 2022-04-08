import PropTypes from 'prop-types';
import Form from './form';

export default function EditAluno({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditAluno.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
