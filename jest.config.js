module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  verbose: true,
  collectCoverage: false,
  roots: ['<rootDir>/__tests__'],
  collectCoverageFrom: [
    '**/*.{ts,js}',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/coverage/**',
  ],
  transform: {
    '\\.ts$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: ['text', 'text-summary'],
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$', // __tests__ 下的所有文件
  testRegex: '(\\.|/)(test|spec)\\.(js|ts)x?$',
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/coverage/'],
  testTimeout: 5000
}
