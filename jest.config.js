module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "components/**/*.js",
    "pages/**/*.js",
    "utils/**/*.js",
    "!**/styles.js",
    "!<rootDir>/components/Base/*",
    "!<rootDir>/components/Icons/*",
    "!<rootDir>/components/Header/NavBar/*",
  ],
  coverageReporters: ["lcov", "text"],
};
