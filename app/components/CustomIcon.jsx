import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomIcon = ({ style }) => {
  return (
    <View style={[styles.iconContainer, style]}>
      <AntDesign name="caretright"  color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});

export default CustomIcon;
