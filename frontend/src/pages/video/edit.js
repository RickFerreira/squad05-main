import PropTypes from 'prop-types';
import Form from './form';

export default function EditVideo({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditVideo.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
