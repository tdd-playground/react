module.exports = {
  verbose: true,
  bail: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  setupFiles: [
    '<rootDir>/test/setupJest.js',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
