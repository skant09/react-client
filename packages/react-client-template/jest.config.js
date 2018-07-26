module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
