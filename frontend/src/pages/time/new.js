import PropTypes from 'prop-types';
import Form from './form';

export default function NewTime({ history, match }) {
  return <Form history={history} action="new" />;
}

NewTime.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
