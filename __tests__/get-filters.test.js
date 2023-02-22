import getFilters from '../functions/get-filters/1.0';
describe('Test Get Filters function', () => {
  const params = {
    conditions: [
      { field: 'sitename', operator: 'matches', value: 'BettyBlocks' },
    ],
  };
  test('Run Get Filters with valid params object', async () => {
    const { as } = await getFilters({ params });
    expect(as).toEqual({ sitename: 'BettyBlocks' });
  });

  test('Run Get Filters with empty params object', async () => {
    const { as } = await getFilters({ params: { conditions: [] } });
    expect(as).toEqual({});
  });
});
