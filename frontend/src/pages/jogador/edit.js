import PropTypes from 'prop-types';
import Form from './form';

export default function EditJogador({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditJogador.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
