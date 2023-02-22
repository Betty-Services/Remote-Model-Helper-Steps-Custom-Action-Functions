const provisonFields = async ({ fields, input }) => {
  try {
    fields = JSON.parse(fields);
  } finally {
    if (!Array.isArray(fields)) {
      throw new Error('The fields input must be an array');
    }
    if (Array.isArray(input)) {
      input.forEach((element) => {
        fields.forEach((field) => {
          if (!element.hasOwnProperty(field)) {
            element[field] = null;
          }
        });
      });
    } else {
      fields.forEach((field) => {
        if (!input.hasOwnProperty(field)) {
          input[field] = null;
        }
      });
    }

    return {
      as: input,
    };
  }
};

export default provisonFields;
