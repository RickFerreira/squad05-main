import PropTypes from 'prop-types';
import Form from './form';

export default function NewComissao({ history, match }) {
  return <Form history={history} action="new" />;
}

NewComissao.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
