// todo
import parseAsJwt from '../functions/parse-as-jwt/1.0';
describe('Get Filters', () => {
  test('Test', async () => {
    const jwt =
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhcHBfdXVpZCI6ImEyM2Q4NDczNGNhYTQyZGNiODAwYmRjZTg1ZTEwNmNkIiwiYXVkIjoiSm9rZW4iLCJhdXRoX3Byb2ZpbGUiOiJjYTVmOTU2ZDQ3YWM0NTljYWViNjc4NzZjODc0Y2FhYSIsImNhc190b2tlbiI6bnVsbCwiZXhwIjoxNjc1NDY4NzgxLCJpYXQiOjE2NzU0NjE1ODEsImlzcyI6Ikpva2VuIiwianRpIjoiMnQwNnVyamY5ZzE0bW83NnU0MDBhYnUxIiwibG9jYWxlIjpudWxsLCJuYmYiOjE2NzU0NjE1ODEsInJvbGVzIjpbMl0sInVzZXJfaWQiOjN9.1yR7aTmDGgcRA_R9JvunofaFvQEHfNvl-jQeQLqHgGWrk11JqPTgpggdEYYAwpoS_HqgDO_XNW-_IJ2BRGSnIQ';

    const { user_id } = await parseAsJwt({ jwt });
  });
});
