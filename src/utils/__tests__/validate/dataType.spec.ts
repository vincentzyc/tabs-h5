import { getType, isBoolean, isObject, isArray, isString } from '../../validate/dataType'

test('getType', () => {
  const obj = {}, arr = ['1'], num = 1, str = "1", bool = false, isNull = null, isUndefined = undefined;
  expect(getType(obj)).toBe('Object');
  expect(getType(arr)).toBe('Array');
  expect(getType(num)).toBe('Number');
  expect(getType(str)).toBe('String');
  expect(getType(bool)).toBe('Boolean');
  expect(getType(isNull)).toBe('Null');
  expect(getType(isUndefined)).toBe('Undefined');
})

test('isBoolean', () => {
  expect(isBoolean({})).toBe(false);
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean('')).toBe(false);
})

test('isObject', () => {
  expect(isObject({})).toBe(true);
  expect(isObject({ aa: '11' })).toBe(true);
  expect(isObject('')).toBe(false);
})

test('isArray', () => {
  expect(isArray([])).toBe(true);
  expect(isArray([1, 2, 3])).toBe(true);
  expect(isArray({})).toBe(false);
})

test('isString', () => {
  expect(isString('')).toBe(true);
  expect(isString(0)).toBe(false);
})