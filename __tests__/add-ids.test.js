import addIds from '../functions/addIds/1.0';
describe('Run Add IDs function', () => {
  const arrayOfItems = [
    {
      name: 'one',
      someId: 123,
    },
    {
      name: 'two',
      someId: 234,
    },
  ];
  test('Without existing Id', async () => {
    const { as } = await addIds({ array: arrayOfItems, existingKey: null });
    expect(as).not.toBeNull();
    expect(as).toEqual([
      {
        name: 'one',
        someId: 123,
        id: 1,
      },
      {
        name: 'two',
        someId: 234,
        id: 2,
      },
    ]);
  });
  test('With existing Id', async () => {
    const { as } = await addIds({ array: arrayOfItems, existingKey: 'someId' });
    expect(as).not.toBeNull();
    expect(as).toEqual([
      {
        name: 'one',
        someId: 123,
        id: 123,
      },
      {
        name: 'two',
        someId: 234,
        id: 234,
      },
    ]);
  });

  test('Not an array', async () => {
    await expect(
      addIds({ array: null, existingKey: 'test' })
    ).rejects.toThrow();
  });
});
