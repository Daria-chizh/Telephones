import telephonesOperating from '../src';

test('telephonesOperating 1', () => {
  const expected = '+79236780999';
  const received = telephonesOperating('8(923)678 09-99');

  expect(received).toBe(expected);
});

test('telephonesOperating 2', () => {
  const expected = '+79236780999';
  const received = telephonesOperating('+7(923)678 09-99');

  expect(received).toBe(expected);
});

test('telephonesOperating 3', () => {
  const expected = '+79236780999';
  const received = telephonesOperating('7(923)678 09-99');

  expect(received).toBe(expected);
});

test('telephonesOperating 4', () => {
  const expected = '+860000000000';
  const received = telephonesOperating('+86 000 000 0000');

  expect(received).toBe(expected);
});
