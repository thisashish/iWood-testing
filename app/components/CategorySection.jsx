// components/CategorySection.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from './styles/Colours'; // Adjust the import path as necessary

const CategorySection = ({ categories }) => {
  return (
   
      <View style={styles.categoryRow}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.title}</Text>
          </View>
        ))}
      </View>
    
  );
};

const styles = StyleSheet.create({
 
  
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
  },
  categoryImage: {
    width: 85,
    height: 85,
    borderRadius: 25,
    marginHorizontal: 8,
  },
  categoryText: {
    marginTop: 5,
    textAlign: 'center',
    color: Colors.white,
    fontSize: 12,
  },
});

export default CategorySection;
