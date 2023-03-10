import provisionFields from '../functions/provision-fields/1.0';
describe('Provision Fields', () => {
  const fields = ['strategic', 'homepage'];
  const input = { foo: 'bar' };
  test('Run provision fields with valid object as input', async () => {
    const { as } = await provisionFields({ fields, input });
    expect(as).not.toBeNull();
    expect(as).toEqual({
      strategic: null,
      foo: 'bar',
      homepage: null,
    });
  });

  test('Run provision fields with valid array as input', async () => {
    const { as } = await provisionFields({ fields, input: [input] });
    expect(as).not.toBeNull();
    expect(as).toEqual([{ foo: 'bar', homepage: null, strategic: null }]);
  });
});
