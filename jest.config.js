require("jest-preset-angular/ngcc-jest-processor");

module.exports = {
  preset: "jest-preset-angular",
  testRunner: "jest-jasmine2",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
};
