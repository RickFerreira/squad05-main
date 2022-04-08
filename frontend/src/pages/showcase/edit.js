import PropTypes from 'prop-types';
import Form from './form';

export default function EditComissao({ history, match }) {
  return <Form id={match.params.id} history={history} action="edit" />;
}

EditComissao.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any,
};
