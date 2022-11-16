import * as ArrayBufferConverter from '../ArrayBufferConverter';

test('should create character', () => {
  const converter = new ArrayBufferConverter.ArrayBufferConverter();
  converter.load(ArrayBufferConverter.getBuffer());

  expect(converter.buffer).toEqual();
});