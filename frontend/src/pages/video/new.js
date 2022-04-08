import PropTypes from 'prop-types';
import Form from './form';

export default function NewVideo({ history, match }) {
  return <Form history={history} action="new" />;
}

NewVideo.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
