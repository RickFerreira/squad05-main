export const extractRules = (definition, object) => {
  const fields = Object.keys(definition);
  const result = {};

  fields.forEach((field) => {
    const rules = definition[field];
    result[field] = validateRule(object[field], rules);
  });

  return result;
};

const validateRule = (value, ruleList = []) => {
  if (!Array.isArray(ruleList)) {
    throw new Error('Rule definition should be an Array.');
  }

  const validationResult = { error: false, message: '' };

  ruleList.forEach((rule) => {
    if (rule.rule === 'required') {
      if (value === null || value === undefined || value === '') {
        validationResult.error = true;
        validationResult.message += (rule.message ?? 'Por favor, preencha o campo') + ' ';
      }
    }
  });

  return validationResult;
};
