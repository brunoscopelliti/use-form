module.exports = {
  collectCoverageFrom: [
    "<rootDir>/package/src/*.js",
    "!<rootDir>/package/src/*.stories.js",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: [
    "html",
    "json",
  ],
  coverageThreshold: {
    global: {
      lines: 95,
    },
  },
  moduleDirectories: [
    "node_modules",
    "<rootDir>/package/src",
  ],
  setupFiles: [
  ],
  setupFilesAfterEnv: [
    "<rootDir>/config/jest.js",
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/**/*.test.js",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  verbose: true,
};
