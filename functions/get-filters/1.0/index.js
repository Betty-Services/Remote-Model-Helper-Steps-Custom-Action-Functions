const getFilters = async ({ params: { conditions } }) => {
  return {
    as: conditions,
  };
};

export default getFilters;
