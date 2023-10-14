import {Routing} from '@configs';
import {ColorConstant} from '@constants';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const MainApp = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <Routing />
        {/* anything component use global routing */}
        {/* example notification toast */}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: ColorConstant.grey.g1,
    position: 'relative',
  },
});
