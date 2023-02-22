import fixPropertyType from '../functions/fix-property-type/1.0';
describe('Fix My Property Type ', () => {
  test('Run Fix My Property Type with an object setting a property to Text', async () => {
    const input = {
      foo: 'bar',
      biz: 0,
    };
    const key = 'biz';
    const setTo = 'text';

    const { as } = await fixPropertyType({ input, key, setTo });

    expect(as).toEqual({
      foo: 'bar',
      biz: '0',
    });
  });

  test('Run Fix My Property Type with an object setting a property to Number', async () => {
    const input = {
      foo: 'bar',
      biz: '0',
    };
    const key = 'biz';
    const setTo = 'number';

    const { as } = await fixPropertyType({ input, key, setTo });

    expect(as).toEqual({
      foo: 'bar',
      biz: 0,
    });
  });

  test('Run Fix My Property Type with an array setting all values of biz to Text', async () => {
    const input = [
      {
        foo: 'bar',
        biz: 0,
      },
      {
        foo: 'bar',
        biz: 0,
      },
    ];
    const key = 'biz';
    const setTo = 'text';

    const { as } = await fixPropertyType({ input, key, setTo });

    expect(as).toEqual([
      {
        foo: 'bar',
        biz: '0',
      },
      {
        foo: 'bar',
        biz: '0',
      },
    ]);
  });

  test('Run Fix My Property Type with an array setting all values of biz to Number', async () => {
    const input = [
      {
        foo: 'bar',
        biz: '0',
      },
      {
        foo: 'bar',
        biz: '0',
      },
    ];
    const key = 'biz';
    const setTo = 'number';

    const { as } = await fixPropertyType({ input, key, setTo });

    expect(as).toEqual([
      {
        foo: 'bar',
        biz: 0,
      },
      {
        foo: 'bar',
        biz: 0,
      },
    ]);
  });
});
