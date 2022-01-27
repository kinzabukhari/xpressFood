import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalTransparentSeparator = ({ containerStyle = {} }) => {
  return (
    <View style={{ ...styles.horizontalContainerStyle, ...containerStyle }} />
  );
};

const VerticalTransparentSeparator = ({ containerStyle = {} }) => {
    return (
      <View style={{ ...styles.verticalContainerStyle, ...containerStyle }} />
    );
};

const styles = StyleSheet.create({
    horizontalContainerStyle: {
        width: 10,
        height: '100%',
    },
    verticalContainerStyle: {
        width: '100%',
        height: 10,
    },
});

export { HorizontalTransparentSeparator, VerticalTransparentSeparator };