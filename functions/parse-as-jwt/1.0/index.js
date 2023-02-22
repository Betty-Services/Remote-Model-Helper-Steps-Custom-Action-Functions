import jwt_decode from 'jwt-decode';
const parseAsJwt = async ({ jwt }) => {
  return { ...jwt_decode(jwt) };
};

export default parseAsJwt;
