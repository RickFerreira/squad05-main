import PropTypes from 'prop-types';
import Form from './form';

export default function EditCampeonato({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditCampeonato.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
