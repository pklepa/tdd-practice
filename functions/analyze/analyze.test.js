import analyze from './analyze'

test('it works', () => {
  expect(1).toBe(1)
})

test('Gets average', () => {
  expect(analyze([1,8,3,4,2,6])).toEqual({average: 4})
})