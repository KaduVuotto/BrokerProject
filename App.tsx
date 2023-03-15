import {extendTheme, NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ACCENT_PURPLE} from './src/style/colors/accent-purple';
import {ACTION_GREEN} from './src/style/colors/action-green';
import {ACTION_RED} from './src/style/colors/action-red';
import {PRIMARY_BLUE} from './src/style/colors/primary-blue';
import {TYPOGRAPHY} from './src/style/colors/typography';

function App(): JSX.Element {
  const theme = extendTheme({
    colors: {
      accent_purple: {
        ...ACCENT_PURPLE,
      },
      action_green: {
        ...ACTION_GREEN,
      },
      action_red: {
        ...ACTION_RED,
      },
      primary: {
        ...PRIMARY_BLUE,
      },
      typography: {
        ...TYPOGRAPHY,
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <StatusBar />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
