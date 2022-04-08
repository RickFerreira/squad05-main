import PropTypes from 'prop-types';
import Form from './form';

export default function NewDisciplina({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

NewDisciplina.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
