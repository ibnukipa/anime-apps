import React, {useCallback} from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {AnimeList, AnimeDetails, AnimeFavorite} from '../screens';
import {RootNavigationParams} from '../types';

const RootStack = createStackNavigator<RootNavigationParams>();
const RootScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const ScreenModalPresentationOptions: StackNavigationOptions = {
  ...TransitionPresets.ModalPresentationIOS,
  gestureEnabled: true,
};
const ScreenScaleCenterOptions: StackNavigationOptions = {
  ...TransitionPresets.ScaleFromCenterAndroid,
};
const ScreenSlideRightOptions: StackNavigationOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const RootNavigation: React.FC = () => {
  const onNavigationReady = useCallback(() => {
    const init = async () => {
      // TODO prepare local database
      // TODO permission checks
      // TODO early internet checks
      // TODO handle deeplink/universal-link if any
    };

    init().finally(async () => {
      // TODO handle splash screen
    });
  }, []);

  return (
    <NavigationContainer onReady={onNavigationReady}>
      <RootStack.Navigator screenOptions={RootScreenOptions}>
        <RootStack.Screen
          name={'AnimeList'}
          component={AnimeList}
          options={ScreenScaleCenterOptions}
        />
        <RootStack.Screen
          name={'AnimeDetails'}
          component={AnimeDetails}
          options={ScreenModalPresentationOptions}
        />
        <RootStack.Screen
          name={'AnimeFavorite'}
          component={AnimeFavorite}
          options={ScreenSlideRightOptions}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

RootNavigation.displayName = 'RootNavigation';

export default RootNavigation;
