// CategoryItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../components/styles/Colours';

const CategoryItem = ({ imageSource, text, isNewLaunch }) => {
  return (
    <View style={styles.categoryItem}>
      {isNewLaunch ? (
        <View style={styles.newLaunch}>
          <Text style={styles.newLaunchText}>NEW</Text>
          <Text style={styles.newLaunchText}>LAUNCH</Text>
        </View>
      ) : (
        <>
          <Image source={imageSource} style={styles.categoryImage} />
          <Text style={styles.categoryText}>{text}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    color: 'red',
  },
  categoryImage: {
    width: 85,
    height: 85,
    borderRadius: 25,
    marginLeft: 8,
    marginRight: 8
  },
  categoryText: {
    marginTop: 5,
    textAlign: 'center',
    color: Colors.white,
    fontSize: 12
  },
  newLaunch: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  newLaunchText: {
    textAlign: 'center',
    color: Colors.white
  },
});

export default CategoryItem;
