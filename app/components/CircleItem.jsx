import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from './styles/Colours';

const CircleItem = ({ discount, brand, name }) => {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/photoshoot/cir.png")} style={styles.circle2} />
        <View style={styles.textContainer}>
          <Text style={styles.discountText}>{discount}</Text>
          <Text style={styles.brandText}>{brand}</Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
categoryItem: {
    flex: 1,
    alignItems: "center",
    color: "red",
    marginRight: 10,
  },

//   categoryItem: {
//     flex: 1,
//     alignItems: "center",
//     color: "red",
//     marginRight: 10,
//   },
//   imageContainer: {
//     position: 'relative',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },


  imageContainer: {
    position: "relative",
    width: 85, 
    height: 85,
  },
  circle2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  circle1: {
    position: "absolute",
    width: "90%",
    height: "90%",
    top: "5%",
    left: "5%",
    resizeMode: "contain",
  },


//   circle2: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:25,
    marginTop:20 
  },
  discountText: {
    fontSize:5,
    color: Colors.white,
    backgroundColor: Colors.blue,
    padding: 2,
    borderRadius: 5,
    marginBottom: 5,
  },
  brandText: {
    fontSize:8,
    color: Colors.white,
    marginBottom: 2,
    fontWeight:'bold'
  },
  nameText: {
    fontSize:8,
    color: Colors.white,
    fontWeight:'bold'
  },
});

export default CircleItem;
