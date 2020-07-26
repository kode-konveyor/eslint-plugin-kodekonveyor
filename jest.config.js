module.exports = {
    roots: ['src','test'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/test/**/*.test.tsx'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: [
      "node_modules",
      "src",
      "test"
    ]
  } 
