# Anime Apps

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Project Structure
- **App.js**: The main entry point of the application.
- **app**: Contains the source code of the application.
- **assets**: Contains icons, images, fonts, and other assets used in the application.
- **components**: Contains reusable components used in the application.
- **constants**: Contains constants files used in the application.
- **hooks**: Contains custom hooks used in the application.
- **navigation**: Contains the navigation configuration of the application.
- **screens**: Contains the screens of the application.
- **services**: Contains the services used in the application.
- **stores**: Contains stores/db used in the application.
- **styles**: Contains general styles used in the application.
- **types**: Contains types used in the application.

# Design Pattern

# Libraries

### react-navigation
This package is required to enable navigation in react native app. This navigation lib is the most use of the others. It's easy to use and the concept is quite simple. In the latest version, It also already support for native navigation. The drawback is this navigation library wasn't implemented from native at first place. So the integration with native is done by the hacky way.

### react-native-safe-area-context
This package is required to handle the safe area in react native app. This package is used to handle the safe area in the app. It's quite simple to use. You just need to wrap the root component with SafeAreaProvider and use SafeAreaView in the component.

### zustand
A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks, isn't boilerplatey or opinionated.

### @react-native-community/blur
This package is required to enable blur effect in react native app. This package is used to enable blur effect in the app. It's quite simple to use. You just need to wrap the component with BlurView and set the blurType props.

# Previews
https://github.com/ibnukipa/anime-apps/assets/12580174/c64634b8-12f8-4a84-be1e-ba4984367796



# Future Improvements
- Enable splash screen
- Enable app icon
- Enable dark-mode styling
- Enable Anime Search
- Advanced anime filtering and sorting
- Loading state with skeleton loading
- Favorite anime screen and styling
- Onboarding screen

