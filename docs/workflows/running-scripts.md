---
title: Running scripts
menuText: Running scripts
description: Learn how to run scripts that can access your stages.
menuOrder: 5
parent: Worklows
---

# Running scripts

You can run an npm script with access to a stage's params, data and storage using the `cloud run [script]` command.

This is useful for tasks like data migrations, or if you would like to run integration tests using a custom test runner.

`cloud run [script]` will run `npm run cloud:[script]` in your local environment, with access to one of your stages. If you don't specify any options the script will have access to your developer sandbox by default.

> When the cloud shell is running you can omit "cloud" from the `cloud run` command, and just use `run [script]`.

## Options

The `cloud run [script]` command has the following options:

- `--stage <name>`: run the script with access to a named stage
- `--test-stage`: run the script with access to a temporary test stage that is automatically deleted after the script completes

> Note: if you specify `--test-stage`, the `--stage` option will be ignored if it is present.

## Additional npm and script arguments

You can pass additional arguments to npm by adding a double dash followed by the arguments. If you also need to pass additional arguments to the npm script, you can add another double dash followed by the script arguments.

For example `cloud run migrate --stage staging -- --if-present -- script-argument --script-option` will result in running the command `npm run cloud:migrate --if-present -- script-argument --script-option` using the environment from the `staging` stage.

## Example: running a migration script

In your `package.json` define a script named "cloud:migrate" which runs "./scripts/migrate.js":

```
# package.json
{
  ...
  "scripts": {
    "cloud:migrate": "./scripts/migrate.js"
  }
  ...
}
```

The migration script can access the stage's params, data, and storage:

```
# migrate.js

import { params, data, storage } from "@serverless/cloud"

async function main() {
  await data.set('some:value', { some: "value" })
}

main()
```

To run the script with access to your developer sandbox:

`cloud run migrate`

To run on a stage called "staging":

`cloud run migrate --stage staging`

Use a double dash to pass additional options to the script:

`cloud run migrate --stage staging -- some-option`

## Example: custom test runner

If you would like to run tests locally against a stage, and would prefer not to use Serverless Cloud's built-in test runner, you could define a "cloud:test" script. For example, to use jest:

```
# package.json
{
  ...
  "scripts": {
    "cloud:test": "jest"
  },
  ...
}
```

Install jest:

`npm install --save-dev jest`

Create a Jest configuration that auto-loads your app:

```
# jest.config.js

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/index.js']
}
```

Then to run your tests against your developer sandbox:

`cloud run test`

To run the tests against a "staging" stage:

`cloud run test --stage staging`

To use a temporary test instance:

`cloud run test --test-stage`

You can use a double dash to pass additional arguments to jest:

`cloud run test --test-stage -- test-pattern`
