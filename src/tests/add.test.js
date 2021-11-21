const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hi ${name}!`

test('should add two numbers', () => {
  const result = add(3, 4)

  expect(result).toBe(7)
  // if (result !== 7) {
  //   throw new Error(`added 4 and 3. the result was ${result}. Expected 7.`)
  // }
})

test('should return greeting with name', () => {
  const result = generateGreeting('Mike')
  expect(result).toBe('Hi Mike!')
})

test('should return greeting with default Anonymous name', () => {
  const result = generateGreeting()
  expect(result).toBe('Hi Anonymous!')
})
