import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from './styles/Colours'; 

const FilterButton = ({ onPress, selected, children }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        selected ? styles.selectedButton : styles.unselectedButton
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, selected ? styles.selectedButtonText : styles.unselectedButtonText]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

    // filterButton: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     padding: 5,
    //     borderColor: Colors.grey,
    //     borderWidth: 1,
    //     borderRadius: 8,
    //     paddingHorizontal: 10,
    //     marginRight: 2,
    //     marginLeft: 2
    //   },
    //   filterButtonText: {
    //     color: Colors.white,
    //     marginLeft: 5,
    //     fontSize: 10
    //   },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: Colors.white,
  },
  unselectedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.grey,
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

export default FilterButton;
