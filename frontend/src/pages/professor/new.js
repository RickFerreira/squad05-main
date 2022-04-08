import PropTypes from 'prop-types';
import Form from './form';

export default function NewProfessor({ history, match }) {
  return <Form history={history} action="new" />;
}

NewProfessor.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
