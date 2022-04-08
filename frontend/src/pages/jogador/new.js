import PropTypes from 'prop-types';
import Form from './form';

export default function NewJogador({ history, match }) {
  return <Form history={history} action="new" />;
}

NewJogador.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
