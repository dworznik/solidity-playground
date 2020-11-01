module.exports = {
  roots: ["<rootDir>/test"],
  transform: {
    "^.+\\.ts$": [
      "@swc-node/jest",
      {
        target: "es2018",
        module: "commonjs",
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
      },
    ],
  },
  //   testEnvironment: "node",
  testEnvironment: "jest-environment-node-single-context",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  maxWorkers: 2,
  logHeapUsage: true,
  testRunner: "jest-circus/runner",
  verbose: true,
};
