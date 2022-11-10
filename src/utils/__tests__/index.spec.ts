import { hasKey, isDef, getUrlParam } from '../index'

import { vi } from 'vitest'

const window = {
  location: {
    href: 'https://h5.junjue888.com/h5/index.html?id=6061699948802140225&abtest=1&pid=37289'
  }
}

vi.stubGlobal('window', window)

test('hasKey', () => {
  const obj = {
    aa: 33,
    bb: 66
  }
  expect(hasKey(obj, 'cc')).toBe(false);
})
test('isDef', () => {
  expect(isDef('')).toBe(true);
  expect(isDef('0')).toBe(true);
  expect(isDef('11')).toBe(true);
  expect(isDef(0)).toBe(true);
  expect(isDef(1)).toBe(true);
  expect(isDef({})).toBe(true);
  expect(isDef(null)).toBe(false);
  expect(isDef(undefined)).toBe(false);
})

test('getUrlParam', () => {
  expect(getUrlParam('abc')).toBe(undefined);
  expect(getUrlParam('pid')).toBe('37289');
  expect(getUrlParam('pid', 'https://h5.junjue888.com/h5/index.html?id=6061699948802140225&abtest=1&pid=10086')).toBe('10086');
})