const config =  {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    verbose: true,
    setupFilesAfterEnv: ["./libs/test/testSetup.js"],
    testMatch: [
        "**/__tests__/*.test.js"
    ]
};

export default config;