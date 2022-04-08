import PropTypes from 'prop-types';
import Form from './form';

export default function NewDisciplina({ history, match }) {
  return <Form history={history} action="new" />;
}

NewDisciplina.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
