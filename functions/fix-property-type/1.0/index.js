const fixMyType = (obj, key, setTo) => {
  if (setTo === 'text') {
    obj[key] = String(obj[key]);
  } else if (setTo === 'number') {
    obj[key] = parseInt(obj[key]);
  }

  return obj;
};

const fixPropertyType = async ({ input, key, setTo }) => {
  let as;
  if (Array.isArray(input)) {
    as = new Array();
    input.forEach((element) => {
      as.push(fixMyType(element, key, setTo));
    });
  } else {
    as = fixMyType(input, key, setTo);
  }

  return {
    as,
  };
};

export default fixPropertyType;
