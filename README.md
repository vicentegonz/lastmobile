# Mobile

This repository contains the code for the base mobile application.

## Requirements

The requirements are simple! You just need:

- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Expo CLI](https://docs.expo.io/workflow/expo-cli/)

## Run application for local development

First, install the dependencies:

```sh
yarn install
```

**Optional**: If you want to modify an environmental variable, you can create an `.env` file and fill the desired attributes:

```sh
nano .env  # or your editor of choice
```

Please note that there is only 1 possible environmental variable that you can modify:

- `DEVELOPMENT_URL`: Defines the development URL of the app. This URL gets used when the app is running on development mode. Defaults to `http://{local-machine-ip}:8000`, where `{local-machine-ip}` corresponds to the IP on the local network of the machine that started the `expo` server. **Warning**: this may be useless to `wsl` users, given that the subsystem runs on a completely different network than the physical machines.

Finally, run project:

```sh
expo start
```

If you are using `wsl`, you need to start the project using tunneling (the `expo` CLI will need to install `@expo/ngrok` to manage the tunneling for you):

```sh
expo start --tunnel
```

Now, there are a couple ways you can use the app after starting the expo server. You can either install the [Expo Go](https://expo.io/client) app in your phone and scan the QR code displayed after starting the `expo` server (notice that your phone and your computer **must be connected to the same network** for this to work) or you can use an [iOS](https://docs.expo.io/workflow/ios-simulator/) or [Android](https://docs.expo.io/workflow/android-studio-emulator/) emulator.

## Aliases

There is an alias configured using `babel`. This alias allows you to import something from the `src` folder when you are deeply nested on another folder using `@/MyComponent.jsx` instead of having to use `../../../../../../../../MyComponent.jsx` (`@` is a _shortcut_ to get to `src`).

## Running the linters

This project includes two linters, namely `ESLint` and `StyleLint`. The former lints the JavaScript code, while the latter lints the styling code. These linters will need to be passing throughout the whole development, and will be enforced by the CI _pipeline_. You will first need to install all the dependencies to run the tests. To achieve this, run:

```sh
yarn install --frozen-lockfile
```

This will install all the `node_modules` without altering the `yarn.lock` file. Finally, you can run the linters using the `make` commands included:

```sh
make eslint
make stylelint
```

You can also format your code automagically using `eslint`. To do this, just run:

```sh
make eslint!
```
