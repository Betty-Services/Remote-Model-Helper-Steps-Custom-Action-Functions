const disectParams = async ({
  params: { skip, take, select, conditions, auth_info },
}) => {
  let filters = {};
  const setConditions = (conditions) => {
    if (Array.isArray(conditions)) {
      conditions.map((item) => {
        setConditions(item);
      });
    } else if (
      typeof conditions === 'object' &&
      'field' in conditions &&
      'value' in conditions
    ) {
      filters[conditions.field] = conditions.value;
    } else {
      setConditions(conditions.filters);
    }
  };

  setConditions(conditions);

  return {
    offset: skip,
    limit: take,
    fields: select,
    filters,
    jwt: auth_info.raw_jwt,
  };
};

export default disectParams;
