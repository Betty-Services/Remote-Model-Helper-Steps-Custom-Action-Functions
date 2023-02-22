const getLimitOffset = async ({ params: { skip, take } }) => {
  return {
    offset: skip,
    limit: take,
  };
};

export default getLimitOffset;
