module.exports = {
  setupFilesAfterEnv: ['./tests/setup.js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
    '\\.(png|jpg|svg)$': '<rootDir>/tests/mocks/imageMock.js',
  },
};
