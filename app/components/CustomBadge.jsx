import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Colors } from './styles/Colours';

const CustomBadge = ({ topText, bottomText }) => {
  return (
    <View style={styles.badgeContainer}>
      <Image source={require("../assets/images/photoshoot/rectangle.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.topText}>{topText}</Text>
        <Text style={styles.bottomText}>{bottomText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    marginTop: 0,
    right: 10,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    fontSize: 5,
    color:Colors.white,
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: 5,
    color:Colors.white,
    fontWeight: "bold",
  },
});

export default CustomBadge;
