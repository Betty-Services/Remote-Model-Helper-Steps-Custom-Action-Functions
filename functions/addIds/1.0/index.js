const addIds = async ({ array, existingKey }) => {
  if (Array.isArray(array)) {
    for (let index = 1; index < array.length + 1; index++) {
      const element = array[index - 1];
      if (existingKey) {
        element['id'] = element[existingKey];
      } else {
        element['id'] = index;
      }
    }
    return {
      as: array,
    };
  } else {
    throw new Error("Input isn't an array");
  }
};

export default addIds;
