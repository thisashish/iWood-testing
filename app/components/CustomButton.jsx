import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from './styles/Colours';

const CustomButton = ({ title, selected, onPress, style, fontFamily }) => {
  return (
    <TouchableOpacity
      style={[styles.button, selected ? styles.selectedButton : styles.unselectedButton, style]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          selected ? styles.selectedButtonText : styles.unselectedButtonText,
          { fontFamily: fontFamily || 'System' }
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: Colors.blue,
  },
  unselectedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  buttonText: {
    fontSize: 12,
  },
  selectedButtonText: {
    color: Colors.white, 
  },
  unselectedButtonText: {
    color: Colors.white,
  },
});

export default CustomButton;
