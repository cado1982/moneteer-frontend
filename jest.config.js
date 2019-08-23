module.exports = {
    preset: 'jest-preset-angular',
    roots: ['src'],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/src/tsconfig.spec.json',
            diagnostics: false
        },
    },
};
