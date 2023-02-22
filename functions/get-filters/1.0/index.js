const getFilters = async ({ params: { conditions } }) => {
  let result = {};

  // let propName = '';
  // const getFilters = (condition) => {
  //   for (const [key, value] of Object.entries(condition)) {
  //     if (typeof value !== 'object' || value === null) {
  //       result[propName] = value;
  //     } else if (
  //       (typeof value === 'object' || Array.isArray(value)) &&
  //       value !== null
  //     ) {
  //       propName = key;
  //       getFilters(condition[key]);
  //     }
  //   }
  //   return result;
  // };

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
      result[conditions.field] = conditions.value;
    } else {
      setConditions(conditions.filters);
    }
  };

  setConditions(conditions);

  return {
    as: result,
  };
};

export default getFilters;
