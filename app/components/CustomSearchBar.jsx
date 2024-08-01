import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "./styles/Colours";

const CustomSearchBar = ({ placeholder, containerStyle }) => {
  return (
    <View style={[styles.searchBar, containerStyle]}>
      <FontAwesome name="search" size={24} color={Colors.grey} />
      <TextInput
        placeholder={placeholder}
        style={styles.searchInput}
        placeholderTextColor="#d3d3d3"
      />
      <FontAwesome
        name="microphone"
        size={24}
        color={Colors.grey}
        style={styles.micIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#36454F",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 45,
    marginBottom: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: Colors.white,
  },
  micIcon: {
    marginLeft: 10,
  },
});

export default CustomSearchBar;
