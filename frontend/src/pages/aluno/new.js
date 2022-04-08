import PropTypes from 'prop-types';
import Form from './form';

export default function NewAluno({ history, match }) {
  return <Form history={history} action="new" />;
}

NewAluno.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
