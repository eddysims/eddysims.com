// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  clearMocks: true,
  testPathIgnorePatterns: ["/node_modules/", "/generators/"],
  verbose: true,
  setupFilesAfterEnv: ["./jestConfig.js"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    "^~components(.*)$": "<rootDir>/src/components$1",
    "^~lib(.*)$": "<rootDir>/src/lib$1",
    "^~types(.*)$": "<rootDir>/src/types$1",
  },
};
