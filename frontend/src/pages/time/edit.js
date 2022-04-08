import PropTypes from 'prop-types';
import Form from './form';

export default function EditTime({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditTime.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
