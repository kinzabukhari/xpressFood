import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors} from './src/global/styles';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <RootNavigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
