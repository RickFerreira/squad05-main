import PropTypes from 'prop-types';
import Form from './form';

export default function NewCampeonato({ history, match }) {
  return <Form history={history} action="new" />;
}

NewCampeonato.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
