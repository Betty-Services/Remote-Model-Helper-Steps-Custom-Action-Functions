const getFields = async ({ params: { select } }) => {
  return {
    as: select,
  };
};

export default getFields;
