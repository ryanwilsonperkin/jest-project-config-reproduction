Reproducing an issue in Jest in the way that certain global config values are
used when specifying projects.

`./run-with-config-file.sh` will run `jest --showConfig` using the jest.config.js file
`./run-with-config-flag.sh` will run `jest --showConfig` using the `--config` flag

Both configs are the same, yet they will result in different values ending up
in the config that is used. Notably, when using the config file the
`transforms` value which has been provided at the global config level will be
removed and the default value will be used. When using the config flag, this
behaviour doesn't happen and the config (correctly) keeps the transforms value.

The full configs are as follows:

<details>

<summary>Config result with file</summary>

```json
{
  "configs": [
    {
      "automock": false,
      "cache": true,
      "cacheDirectory": "/private/var/folders/f5/9n2lw05s0txg9p0d91m3hnvr0000gn/T/jest_dx",
      "clearMocks": false,
      "coveragePathIgnorePatterns": [
        "/node_modules/"
      ],
      "cwd": "/redacted/jest-project-config-reproduction",
      "detectLeaks": false,
      "detectOpenHandles": false,
      "displayName": {
        "color": "white",
        "name": "feature1"
      },
      "errorOnDeprecated": false,
      "extensionsToTreatAsEsm": [],
      "extraGlobals": [],
      "forceCoverageMatch": [],
      "globals": {},
      "haste": {
        "computeSha1": false,
        "enableSymlinks": false,
        "forceNodeFilesystemAPI": false,
        "throwOnModuleCollision": false
      },
      "injectGlobals": true,
      "moduleDirectories": [
        "node_modules"
      ],
      "moduleFileExtensions": [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
      ],
      "moduleNameMapper": [],
      "modulePathIgnorePatterns": [],
      "name": "d6416cc7a528b4e48c15e56745572f86",
      "prettierPath": "prettier",
      "resetMocks": false,
      "resetModules": false,
      "restoreMocks": false,
      "rootDir": "/redacted/jest-project-config-reproduction",
      "roots": [
        "/redacted/jest-project-config-reproduction/feature1"
      ],
      "runner": "/redacted/jest-project-config-reproduction/node_modules/jest-runner/build/index.js",
      "setupFiles": [],
      "setupFilesAfterEnv": [],
      "skipFilter": false,
      "slowTestThreshold": 5,
      "snapshotSerializers": [],
      "testEnvironment": "/redacted/jest-project-config-reproduction/node_modules/jest-environment-node/build/index.js",
      "testEnvironmentOptions": {},
      "testLocationInResults": false,
      "testMatch": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
      ],
      "testPathIgnorePatterns": [
        "/node_modules/"
      ],
      "testRegex": [],
      "testRunner": "/redacted/jest-project-config-reproduction/node_modules/jest-circus/runner.js",
      "testURL": "http://localhost",
      "timers": "real",
      "transform": [
        [
          "\\.[jt]sx?$",
          "/redacted/jest-project-config-reproduction/node_modules/babel-jest/build/index.js",
          {}
        ]
      ],
      "transformIgnorePatterns": [
        "/node_modules/",
        "\\.pnp\\.[^\\/]+$"
      ],
      "watchPathIgnorePatterns": []
    },
    {
      "automock": false,
      "cache": true,
      "cacheDirectory": "/private/var/folders/f5/9n2lw05s0txg9p0d91m3hnvr0000gn/T/jest_dx",
      "clearMocks": false,
      "coveragePathIgnorePatterns": [
        "/node_modules/"
      ],
      "cwd": "/redacted/jest-project-config-reproduction",
      "detectLeaks": false,
      "detectOpenHandles": false,
      "displayName": {
        "color": "white",
        "name": "feature2"
      },
      "errorOnDeprecated": false,
      "extensionsToTreatAsEsm": [],
      "extraGlobals": [],
      "forceCoverageMatch": [],
      "globals": {},
      "haste": {
        "computeSha1": false,
        "enableSymlinks": false,
        "forceNodeFilesystemAPI": false,
        "throwOnModuleCollision": false
      },
      "injectGlobals": true,
      "moduleDirectories": [
        "node_modules"
      ],
      "moduleFileExtensions": [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
      ],
      "moduleNameMapper": [],
      "modulePathIgnorePatterns": [],
      "name": "5773462ae893e9efc76fc5583583f7d8",
      "prettierPath": "prettier",
      "resetMocks": false,
      "resetModules": false,
      "restoreMocks": false,
      "rootDir": "/redacted/jest-project-config-reproduction",
      "roots": [
        "/redacted/jest-project-config-reproduction/feature2"
      ],
      "runner": "/redacted/jest-project-config-reproduction/node_modules/jest-runner/build/index.js",
      "setupFiles": [],
      "setupFilesAfterEnv": [],
      "skipFilter": false,
      "slowTestThreshold": 5,
      "snapshotSerializers": [],
      "testEnvironment": "/redacted/jest-project-config-reproduction/node_modules/jest-environment-node/build/index.js",
      "testEnvironmentOptions": {},
      "testLocationInResults": false,
      "testMatch": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
      ],
      "testPathIgnorePatterns": [
        "/node_modules/"
      ],
      "testRegex": [],
      "testRunner": "/redacted/jest-project-config-reproduction/node_modules/jest-circus/runner.js",
      "testURL": "http://localhost",
      "timers": "real",
      "transform": [
        [
          "\\.[jt]sx?$",
          "/redacted/jest-project-config-reproduction/node_modules/babel-jest/build/index.js",
          {}
        ]
      ],
      "transformIgnorePatterns": [
        "/node_modules/",
        "\\.pnp\\.[^\\/]+$"
      ],
      "watchPathIgnorePatterns": []
    }
  ],
  "globalConfig": {
    "bail": 0,
    "changedFilesWithAncestor": false,
    "collectCoverage": false,
    "collectCoverageFrom": [],
    "coverageDirectory": "/redacted/jest-project-config-reproduction/coverage",
    "coverageProvider": "babel",
    "coverageReporters": [
      "json",
      "text",
      "lcov",
      "clover"
    ],
    "detectLeaks": false,
    "detectOpenHandles": false,
    "errorOnDeprecated": false,
    "expand": false,
    "findRelatedTests": false,
    "forceExit": false,
    "json": false,
    "lastCommit": false,
    "listTests": false,
    "logHeapUsage": false,
    "maxConcurrency": 5,
    "maxWorkers": 7,
    "noStackTrace": false,
    "nonFlagArgs": [],
    "notify": false,
    "notifyMode": "failure-change",
    "onlyChanged": false,
    "onlyFailures": false,
    "passWithNoTests": false,
    "projects": [
      {
        "displayName": "feature1",
        "roots": [
          "<rootDir>/feature1"
        ],
        "rootDir": "/redacted/jest-project-config-reproduction"
      },
      {
        "displayName": "feature2",
        "roots": [
          "<rootDir>/feature2"
        ],
        "rootDir": "/redacted/jest-project-config-reproduction"
      }
    ],
    "rootDir": "/redacted/jest-project-config-reproduction",
    "runTestsByPath": false,
    "skipFilter": false,
    "testFailureExitCode": 1,
    "testPathPattern": "",
    "testSequencer": "/redacted/jest-project-config-reproduction/node_modules/@jest/test-sequencer/build/index.js",
    "updateSnapshot": "new",
    "useStderr": false,
    "watch": false,
    "watchAll": false,
    "watchman": true
  },
  "version": "27.4.7"
}
```

</details>

<details>

<summary>Config result with flag</summary>

```json
{
  "configs": [
    {
      "automock": false,
      "cache": true,
      "cacheDirectory": "/private/var/folders/f5/9n2lw05s0txg9p0d91m3hnvr0000gn/T/jest_dx",
      "clearMocks": false,
      "coveragePathIgnorePatterns": [
        "/node_modules/"
      ],
      "cwd": "/redacted/jest-project-config-reproduction",
      "detectLeaks": false,
      "detectOpenHandles": false,
      "displayName": {
        "color": "white",
        "name": "feature1"
      },
      "errorOnDeprecated": false,
      "extensionsToTreatAsEsm": [],
      "extraGlobals": [],
      "forceCoverageMatch": [],
      "globals": {},
      "haste": {
        "computeSha1": false,
        "enableSymlinks": false,
        "forceNodeFilesystemAPI": false,
        "throwOnModuleCollision": false
      },
      "injectGlobals": true,
      "moduleDirectories": [
        "node_modules"
      ],
      "moduleFileExtensions": [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
      ],
      "moduleNameMapper": [],
      "modulePathIgnorePatterns": [],
      "name": "d6416cc7a528b4e48c15e56745572f86",
      "prettierPath": "prettier",
      "resetMocks": false,
      "resetModules": false,
      "restoreMocks": false,
      "rootDir": "/redacted/jest-project-config-reproduction",
      "roots": [
        "/redacted/jest-project-config-reproduction/feature1"
      ],
      "runner": "/redacted/jest-project-config-reproduction/node_modules/jest-runner/build/index.js",
      "setupFiles": [],
      "setupFilesAfterEnv": [],
      "skipFilter": false,
      "slowTestThreshold": 5,
      "snapshotSerializers": [],
      "testEnvironment": "/redacted/jest-project-config-reproduction/node_modules/jest-environment-node/build/index.js",
      "testEnvironmentOptions": {},
      "testLocationInResults": false,
      "testMatch": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
      ],
      "testPathIgnorePatterns": [
        "/node_modules/"
      ],
      "testRegex": [],
      "testRunner": "/redacted/jest-project-config-reproduction/node_modules/jest-circus/runner.js",
      "testURL": "http://localhost",
      "timers": "real",
      "transform": [
        [
          "\\.ts$",
          "/redacted/jest-project-config-reproduction/node_modules/babel-jest/build/index.js",
          {
            "babelrc": false
          }
        ]
      ],
      "transformIgnorePatterns": [
        "/node_modules/",
        "\\.pnp\\.[^\\/]+$"
      ],
      "watchPathIgnorePatterns": []
    },
    {
      "automock": false,
      "cache": true,
      "cacheDirectory": "/private/var/folders/f5/9n2lw05s0txg9p0d91m3hnvr0000gn/T/jest_dx",
      "clearMocks": false,
      "coveragePathIgnorePatterns": [
        "/node_modules/"
      ],
      "cwd": "/redacted/jest-project-config-reproduction",
      "detectLeaks": false,
      "detectOpenHandles": false,
      "displayName": {
        "color": "white",
        "name": "feature2"
      },
      "errorOnDeprecated": false,
      "extensionsToTreatAsEsm": [],
      "extraGlobals": [],
      "forceCoverageMatch": [],
      "globals": {},
      "haste": {
        "computeSha1": false,
        "enableSymlinks": false,
        "forceNodeFilesystemAPI": false,
        "throwOnModuleCollision": false
      },
      "injectGlobals": true,
      "moduleDirectories": [
        "node_modules"
      ],
      "moduleFileExtensions": [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
      ],
      "moduleNameMapper": [],
      "modulePathIgnorePatterns": [],
      "name": "5773462ae893e9efc76fc5583583f7d8",
      "prettierPath": "prettier",
      "resetMocks": false,
      "resetModules": false,
      "restoreMocks": false,
      "rootDir": "/redacted/jest-project-config-reproduction",
      "roots": [
        "/redacted/jest-project-config-reproduction/feature2"
      ],
      "runner": "/redacted/jest-project-config-reproduction/node_modules/jest-runner/build/index.js",
      "setupFiles": [],
      "setupFilesAfterEnv": [],
      "skipFilter": false,
      "slowTestThreshold": 5,
      "snapshotSerializers": [],
      "testEnvironment": "/redacted/jest-project-config-reproduction/node_modules/jest-environment-node/build/index.js",
      "testEnvironmentOptions": {},
      "testLocationInResults": false,
      "testMatch": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
      ],
      "testPathIgnorePatterns": [
        "/node_modules/"
      ],
      "testRegex": [],
      "testRunner": "/redacted/jest-project-config-reproduction/node_modules/jest-circus/runner.js",
      "testURL": "http://localhost",
      "timers": "real",
      "transform": [
        [
          "\\.ts$",
          "/redacted/jest-project-config-reproduction/node_modules/babel-jest/build/index.js",
          {
            "babelrc": false
          }
        ]
      ],
      "transformIgnorePatterns": [
        "/node_modules/",
        "\\.pnp\\.[^\\/]+$"
      ],
      "watchPathIgnorePatterns": []
    }
  ],
  "globalConfig": {
    "bail": 0,
    "changedFilesWithAncestor": false,
    "collectCoverage": false,
    "collectCoverageFrom": [],
    "coverageDirectory": "/redacted/jest-project-config-reproduction/coverage",
    "coverageProvider": "babel",
    "coverageReporters": [
      "json",
      "text",
      "lcov",
      "clover"
    ],
    "detectLeaks": false,
    "detectOpenHandles": false,
    "errorOnDeprecated": false,
    "expand": false,
    "findRelatedTests": false,
    "forceExit": false,
    "json": false,
    "lastCommit": false,
    "listTests": false,
    "logHeapUsage": false,
    "maxConcurrency": 5,
    "maxWorkers": 7,
    "noStackTrace": false,
    "nonFlagArgs": [],
    "notify": false,
    "notifyMode": "failure-change",
    "onlyChanged": false,
    "onlyFailures": false,
    "passWithNoTests": false,
    "projects": [
      {
        "displayName": "feature1",
        "roots": [
          "<rootDir>/feature1"
        ],
        "rootDir": "/redacted/jest-project-config-reproduction"
      },
      {
        "displayName": "feature2",
        "roots": [
          "<rootDir>/feature2"
        ],
        "rootDir": "/redacted/jest-project-config-reproduction"
      }
    ],
    "rootDir": "/redacted/jest-project-config-reproduction",
    "runTestsByPath": false,
    "skipFilter": false,
    "testFailureExitCode": 1,
    "testPathPattern": "",
    "testSequencer": "/redacted/jest-project-config-reproduction/node_modules/@jest/test-sequencer/build/index.js",
    "updateSnapshot": "new",
    "useStderr": false,
    "watch": false,
    "watchAll": false,
    "watchman": true
  },
  "version": "27.4.7"
}
```

</details>
