module.exports = {
  transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
  },
};
