import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { GStyle } from "../components/styles/Global";
import { Colors } from "../components/styles/Colours";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import CustomProfile from "../components/CustomProfile";
import CircleItem from "../components/CircleItem";
import CustomSearchBar from "../components/CustomSearchBar";
import CustomIcon from "../components/CustomIcon";
import CustomBadge from "../components/CustomBadge";

const SubCatgory = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  const handlePress = (productId) => {
    navigation.navigate("ProductDetails", { productId });
  };

  return (
    <ScrollView
      style={[GStyle.container, { backgroundColor: Colors.dark.background }]}
    >
      <View>
        <CustomProfile
          onPress={() => navigation.goBack()}
          title="All Over India"
        />

        <CustomSearchBar
          placeholder="Search Product, Store, brands"
          containerStyle={styles.customSearchBar}
        />

        <View style={styles.categorySection}>
          <Text style={styles.categoryTitle}>
            Fashion Categories around You
          </Text>
          <ScrollView horizontal={true}>
            <View style={styles.categoryRow}>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/men.png")}
                    style={styles.men}
                  />
                </View>

                <Text style={styles.categoryText}>Men</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat2.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Women</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat3.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Accesories</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat4.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Ethnic Dresses</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.categorySection}>
          <ScrollView horizontal={true}>
            <View style={styles.categoryRow}>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat5.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Traditional Sets</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat6.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Western Sets</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat7.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Kids</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat8.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Co-sets</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.categorySection}>
          <ScrollView horizontal={true}>
            <View style={styles.categoryRow}>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat9.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Traditional Sets</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat10.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Western Sets</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/photoshoot/circle2.png")}
                    style={styles.circle2}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/circle1.png")}
                    style={styles.circle1}
                  />
                  <Image
                    source={require("../assets/images/photoshoot/cat11.png")}
                    style={styles.men}
                  />
                </View>
                <Text style={styles.categoryText}>Kids</Text>
              </View>
              <View style={styles.categoryItem}>
                <View style={styles.imageContainer}>
                  <View style={styles.newLaunch}>
                    <Text style={styles.newLaunchText}>NEW</Text>
                    <Text style={styles.newLaunchText}>LAUNCH</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      <View style={styles.bannerSection}>
        <View>
          <Image
            source={require("../assets/images/photoshoot/brand.png")}
            style={styles.bannerImage}
          />
          <Text style={styles.firstRowText}>Festival Ethnic Collection</Text>
          <Text style={styles.secondRowText}>Up To 35% OFF</Text>
        </View>

        <View style={styles.slider}>
          {[...Array(7).keys()].map((_, index) => (
            <View key={index} style={styles.sliderDot} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.portfolioButton,
              selectedButton === "Sort" ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress("Sort")}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButton === "Sort" ? styles.selectedButtonText : null,
              ]}
            >
              Sort
              <Entypo name="chevron-small-down" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.portfolioButton,
              selectedButton === "Near Me" ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress("Near Me")}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButton === "Near Me" ? styles.selectedButtonText : null,
              ]}
            >
              Near Me
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.portfolioButton,
              selectedButton === "Top Rated" ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress("Top Rated")}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButton === "Top Rated"
                  ? styles.selectedButtonText
                  : null,
              ]}
            >
              Top Rated
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.portfolioButton,
              selectedButton === "Offers" ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress("Offers")}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButton === "Offers" ? styles.selectedButtonText : null,
              ]}
            >
              Offers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.portfolioButton,
              selectedButton === "Save" ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress("Save")}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButton === "Save" ? styles.selectedButtonText : null,
              ]}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.brandsSection}>
        <View style={styles.brandsRow}>
          <TouchableOpacity onPress={() => handlePress(1)}>
            <Image
              source={require("../assets/images/photoshoot/dress1.png")}
              style={styles.reelimage}
            />
            <CustomIcon />
            <CustomBadge topText="Save" bottomText="10%" />
            <Text style={styles.firstRowText}>Western Dresses</Text>
            <Text style={styles.secondRowText}>10Km, Nagpur</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(2)}>
            <Image
              source={require("../assets/images/photoshoot/dress2.png")}
              style={styles.reelimage}
            />
            <CustomIcon />
            <CustomBadge topText="OFF" bottomText="20%" />
            <Text style={styles.firstRowText}>Shorts Dresses</Text>
            <Text style={styles.secondRowText}>16.1Km, Nagpur</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.brandsSection}>
        <View style={styles.brandsRow}>
          <TouchableOpacity onPress={() => handlePress(3)}>
            <Image
              source={require("../assets/images/photoshoot/dress3.png")}
              style={styles.reelimage}
            />
            <CustomIcon />
            <CustomBadge topText="Save" bottomText="10%" />
            <Text style={styles.firstRowText}>Shorts</Text>
            <Text style={styles.secondRowText}>16.1Km, Nagpur</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(4)}>
            <Image
              source={require("../assets/images/photoshoot/dress4.png")}
              style={styles.reelimage}
            />
            <CustomIcon />
            <CustomBadge topText="Save" bottomText="10%" />
            <Text style={styles.firstRowText}>Shorts</Text>
            <Text style={styles.secondRowText}>16.1Km, Nagpur</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.brandsSection}>
        <View style={styles.brandsRow}>
          <TouchableOpacity onPress={() => handlePress(5)}>
            <Image
              source={require("../assets/images/photoshoot/dress5.png")}
              style={styles.reelimage}
            />
            <CustomIcon />
            <CustomBadge topText="Save" bottomText="10%" />
            <Text style={styles.firstRowText}>Western Dresses</Text>
            <Text style={styles.secondRowText}>16.1Km, Nagpur</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(6)}>
            <Image
              source={require("../assets/images/photoshoot/dress6.png")}
              style={styles.reelimage}
            />
            <CustomIcon />
            <CustomBadge topText="OFF" bottomText="20%" />
            <Text style={styles.firstRowText}>Shorts Dresses</Text>
            <Text style={styles.secondRowText}>16.1Km, Nagpur</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.brandsSection}>
        <View style={styles.brandsRow}>
          <TouchableOpacity onPress={() => handlePress(7)}>
            <Image
              source={require("../assets/images/photoshoot/dress7.png")}
              style={styles.reelimage}
            />
            <CustomIcon />

            <CustomBadge topText="Save" bottomText="10%" />
            <Text style={styles.firstRowText}>Shorts</Text>
            <Text style={styles.secondRowText}>16.1Km, Nagpur</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(8)}>
            <Image
              source={require("../assets/images/photoshoot/dress8.png")}
              style={styles.reelimage}
            />
            <CustomIcon />
            <CustomBadge topText="Save" bottomText="10%" />
            <Text style={styles.firstRowText}>Shorts</Text>
            <Text style={styles.secondRowText}>16.1Km, Nagpur</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.brandsSection}>
        <Text style={styles.brandsTitle}>Stores you can’t miss</Text>

        <View style={styles.categoryRow}>
          <CircleItem discount="20% Off" brand="BRAND" name="NAME" />
          <CircleItem discount="20% Off" brand="BRAND" name="NAME" />
          <CircleItem discount="20% Off" brand="BRAND" name="NAME" />
          <CircleItem discount="20% Off" brand="BRAND" name="NAME" />
        </View>
      </View>

      <View style={styles.brandsSection}>
        <View style={styles.categoryRow}>
          <CircleItem discount="20% Off" brand="BRAND" name="NAME" />
          <CircleItem discount="20% Off" brand="BRAND" name="NAME" />
          <CircleItem discount="20% Off" brand="BRAND" name="NAME" />
          <CircleItem discount="20% Off" brand="BRAND" name="NAME" />
        </View>
      </View>

      <View style={styles.bigDealsSection}>
        <Image source={require("../assets/images/photoshoot/sale.png")} />
      </View>

      <Text style={styles.recentTitle}>
        Deel Ends in <Text style={styles.sale}> 13h : 57m : 46s</Text>{" "}
      </Text>

      <View style={styles.recentReelsSection}>
        <View style={styles.reelsRow}>
          <View>
            <Image
              source={require("../assets/images/photoshoot/deal1.png")}
              style={styles.reelImage}
            />
            <Text style={styles.firstlineText}>Brands Name</Text>
            <Text style={styles.secondlineText}>Under Rs.499</Text>
            <Text style={styles.thirdlineText}>+Extra 20% OFF</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/photoshoot/deal2.png")}
              style={styles.reelImage}
            />
            <Text style={styles.firstlineText}>Brands Name</Text>
            <Text style={styles.secondlineText}>Under Rs.499</Text>
            <Text style={styles.thirdlineText}>+Extra 20% OFF</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/photoshoot/deal3.png")}
              style={styles.reelImage}
            />
            <Text style={styles.firstlineText}>Brands Name</Text>
            <Text style={styles.secondlineText}>Under Rs.499</Text>
            <Text style={styles.thirdlineText}>+Extra 20% OFF</Text>
          </View>
        </View>
      </View>

      <View style={styles.recentReelsSection}>
        <View style={styles.recentReelsHeader}>
          <Text style={styles.recentReelsTitle}> You Might also Like</Text>
          <Text style={styles.recentReelsTitle}>
            <AntDesign name="caretright" color={Colors.white} />
            Watch more
          </Text>
        </View>
        <View style={styles.reactRow}>
          <View>
            <Image
              source={require("../assets/images/photoshoot/like1.png")}
              style={styles.bnameImage}
            />
            <CustomIcon style={styles.customIconCenter} />
            <Text style={styles.firstlineTexts}>Brands Name</Text>
            <AntDesign
              name="caretright"
              size={20}
              color="yellow"
              style={styles.plays}
            />
            <Image
              source={require("../assets/images/product-local/circc.png")}
              style={styles.plays}
            />
            <CustomIcon style={styles.customIconCenter} />
          </View>

          <View>
            <Image
              source={require("../assets/images/photoshoot/like2.png")}
              style={styles.bnameImage}
            />
            <CustomIcon style={styles.customIconCenter} />
            <Text style={styles.firstlineTexts}>Brands Name</Text>
          </View>

          <View>
            <Image
              source={require("../assets/images/photoshoot/like3.png")}
              style={styles.bnameImage}
            />
            <CustomIcon style={styles.customIconCenter} />
            <Text style={styles.firstlineTexts}>Brands Name</Text>
          </View>
        </View>
      </View>

      <View style={styles.recentReelsSection}>
        <View style={styles.recentReelsHeader}>
          <Text style={styles.recentReelsTitle}> You Might also Like</Text>
        </View>
        <View style={styles.reactRow}>
          <View>
            <Image
              source={require("../assets/images/photoshoot/like4.png")}
              style={styles.bnameImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Dress</Text>
              <Text style={styles.texts}>64% OFF</Text>
            </View>
          </View>
          <View>
            <Image
              source={require("../assets/images/photoshoot/like5.png")}
              style={styles.bnameImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Shorts</Text>
              <Text style={styles.texts}>64% OFF</Text>
            </View>
          </View>
          <View>
            <Image
              source={require("../assets/images/photoshoot/like6.png")}
              style={styles.bnameImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Shorts</Text>
              <Text style={styles.texts}>64% OFF</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.recentReelsSection}>
        <View style={styles.recentReelsHeader}>
          <Text style={styles.recentReelsTitle}>
            Continue Browsing These Styles
          </Text>
          <Text style={styles.recentReelsTitle}>
            <AntDesign name="caretright" color={Colors.white} />
            Watch more
          </Text>
        </View>
        <View style={styles.reactRow}>
          <View>
            <Image
              source={require("../assets/images/product-local/reel1.png")}
              style={styles.bnameImage}
            />
            <CustomIcon style={styles.customIconCenter} />

            <Text style={styles.firstlineTexts}>Brands Name</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/product-local/reel2.png")}
              style={styles.bnameImage}
            />
            <CustomIcon style={styles.customIconCenter} />
            <Text style={styles.firstlineTexts}>Brands Name</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/product-local/reel3.png")}
              style={styles.bnameImage}
            />
            <CustomIcon style={styles.customIconCenter} />
            <Text style={styles.firstlineTexts}>Brands Name</Text>
          </View>
        </View>
      </View>

      <View style={styles.brandsSection}>
        <Text style={styles.recentReelsTitle}>You Might also Like</Text>
        <View style={styles.brandsRow}>
          <View>
            <Image
              source={require("../assets/images/photoshoot/cap1.png")}
              style={styles.reelimage}
            />
            <CustomIcon style={{ bottom: 5, right: 15 }} />
            <CustomBadge topText="Save" bottomText="10%" />
            <Text style={styles.firstRowText}>Western Dresses</Text>

            <Text style={styles.secondRowText}>10Km, Nagpur</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/photoshoot/cap2.png")}
              style={styles.reelimage}
            />
            <CustomBadge topText="OFF" bottomText="20%" />
            <CustomIcon style={{ bottom: 5, right: 15 }} />
            <Text style={styles.firstRowText}>Western Dresses</Text>

            <Text style={styles.secondRowText}>10Km, Nagpur</Text>
          </View>
        </View>
      </View>
      <View style={styles.brandsSection}>
        <View style={styles.brandsRow}>
          <View>
            <Image
              source={require("../assets/images/photoshoot/cap3.png")}
              style={styles.reelimage}
            />
            <CustomBadge topText="Save" bottomText="10%" />
            <CustomIcon style={{ bottom: 5, right: 15 }} />
            <Text style={styles.firstRowText}>Western Dresses</Text>

            <Text style={styles.secondRowText}>10Km, Nagpur</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/photoshoot/cap4.png")}
              style={styles.reelimage}
            />
            <CustomBadge topText="Save" bottomText="10%" />
            <CustomIcon style={{ bottom: 5, right: 15 }} />
            <Text style={styles.firstRowText}>Western Dresses</Text>

            <Text style={styles.secondRowText}>10Km, Nagpur</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
    backgroundColor: Colors.dark.background,
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "bold",
  },
  topRightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#36454F",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    // borderColor: Colors.grey,
    borderRadius: 8,
  },
  sale: {
    color: Colors.blue,
  },
  bnameImage: {
    marginTop: 15,
    marginHorizontal: 8,
    marginBottom: 10,
  },
  bagImage: {
    marginTop: 15,
    marginHorizontal: 5,
    marginBottom: 30,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
  },
  arrowImage: {
    color: Colors.white,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  categorySection: {
    padding: 10,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  scrollView: {
    marginBottom: 10, // Adjust as needed
  },
  categoryTitle: {
    fontSize: 18,
    color: Colors.white,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    // paddingRight:5,
  },
  categoryItem: {
    flex: 1,
    alignItems: "center",
    color: "red",
    marginRight: 10,
  },
  reelimage: {
    marginHorizontal: 5, // Add horizontal margin to each image
  },
  categoryImage: {
    width: 85,
    height: 85,
    borderRadius: 25,
    marginLeft: 8,
    marginRight: 8,
  },
  categoryText: {
    marginTop: 5,
    textAlign: "center",
    color: Colors.white,
    fontSize: 12,
  },
  imageContainer: {
    position: "relative",
    width: 85, // Adjust the size as needed
    height: 85, // Adjust the size as needed
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
  men: {
    position: "absolute",
    width: "60%",
    height: "60%",
    top: "20%",
    left: "20%",
    resizeMode: "contain",
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: Colors.white,
  },

  newLaunch: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  newLaunchText: {
    textAlign: "center",
    color: Colors.white,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: Colors.blue,
  },
  unselectedButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  selectedButtonText: {
    color: Colors.white,
  },
  unselectedButtonText: {
    color: Colors.white,
  },

  bannerSection: {
    padding: 10,
  },
  bannerImage: {
    width: "100%",
    marginVertical: 10,
  },
  slider: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderDot: {
    width: 30,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.grey,
    margin: 5,
  },

  recentReelsSection: {
    padding: 10,
  },
  recentReelsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recentReelsTitle: {
    color: Colors.white,
    marginTop: 10,
  },
  recentTitle: {
    color: Colors.white,
    textAlign: "center",
  },

  girl1Image: {
    position: "absolute",
    right: 0,
    top: 25,
    width: 180,
    height: 185,
    marginTop: 0,
  },
  reelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  reactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
  },
  reelImage: {
    // width: 100,
    // height: 150,
  },

  bigDealsSection: {
    padding: 10,
    alignItems: "center",
  },
  rectangleHotImage: {
    width: "100%",
    height: 150,
    position: "relative",
    resizeMode: "cover",
    justifyContent: "center",
    marginTop: 50,
  },
  rectangleHotImages: {
    width: "100%",
    height: 150,
    position: "relative",
    resizeMode: "cover",
    justifyContent: "center",
    marginTop: 20,
  },
  ellipseImage: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 220,
    height: 122,
    marginHorizontal: 0,
  },
  ellipse1Image: {
    top: 0,
    width: 270,
    height: 150,
    marginHorizontal: 0,
    right: 40,
  },
  bigDealsContent: {
    position: "absolute",
    left: 20,
    top: 10,
  },
  bigDealsText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  shopNowButton: {
    backgroundColor: "#0698FB",
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
    width: 125,
    height: 40,
    marginRight: 200,
  },
  shopNowText: {
    color: "#fff",
  },
  girlImage: {
    position: "absolute",
    right: 0,
    top: 25,
    width: 180,
    height: 185,
    marginTop: 0,
  },
  girlImages: {
    position: "absolute",
    right: 25,
    top: 0,

    width: 180,
    height: 185,
    marginTop: 0,
  },
  skincareSection: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skincareItem: {
    width: "30%",
  },
  skincareImage: {
    width: "100%",
    height: 100,
  },
  skincareText: {
    marginTop: 5,
    textAlign: "center",
  },
  discountText: {
    textAlign: "center",
    color: "#f00",
  },
  brandsSection: {
    padding: 10,
    marginTop: 0,
  },
  brandsTitle: {
    fontSize: 18,

    color: Colors.white,
    textAlign: "center",
  },
  brandsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  brandsImage: {
    width: "48%",
    height: 100,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  portfolioButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginLeft: 5,
  },
  selectedButton: {
    backgroundColor: Colors.blue,
  },
  selectedButtonText: {
    color: Colors.white,
  },
  buttonText: {
    color: Colors.grey,
    fontSize: 12,
  },

  firstRowText: {
    marginLeft: 12,
    position: "absolute",
    bottom: 30,
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Sans-serif",
  },
  secondRowText: {
    marginLeft: 12,
    fontSize: 8,
    position: "absolute",
    bottom: 15,
    color: Colors.whitesmoke,
  },
  firstRowText: {
    marginLeft: 12,
    position: "absolute",
    bottom: 15,
    color: Colors.white,
    fontSize: 12,
  },
  secondRowText: {
    marginLeft: 12,
    fontSize: 10,
    position: "absolute",
    bottom: 0,
    color: Colors.whitesmoke,
  },
  customIconCenter: {
    top: "50%",
    left: "50%",
    transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
  },
  firstlineText: {
    marginRight: 6,
    position: "absolute",
    bottom: 55,
    color: "#0698fb",
    fontWeight: "bold",
    fontSize: 7,
    textAlign: "center",
    left: 20,
    backgroundColor: Colors.white,
    borderColor: "#0698FB",
    borderWidth: 1,
    padding: 2,
  },
  secondlineText: {
    marginRight: 8,
    position: "absolute",
    bottom: 35,
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 11,
    textAlign: "center",
    left: 15,
  },
  thirdlineText: {
    marginRight: 10,
    position: "absolute",
    bottom: 20,
    color: "#0698fb",
    fontWeight: "bold",
    fontSize: 8,
    textAlign: "center",
    left: 15,
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    position: "absolute",
    bottom: -27,
    width: "100%", // Full width of the image
    alignItems: "left",
    padding: 0,
    width: "100%", // Full width of the image
    alignItems: "center",
    marginBottom: 5,
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  text: {
    color: "white",
    fontSize: 12,
    textAlign: "left",
    marginRight: 65,
    fontWeight: "500",
  },
  texts: {
    color: "white",
    fontSize: 10,
    textAlign: "left",
    marginRight: 60,
    color: "#0698fb",
    fontWeight: "600",
  },
  firstlineTexts: {
    marginLeft: 12,
    position: "absolute",
    bottom: 30,
    color: "#0698fb",
    fontWeight: "900",
    fontSize: 10,
    textAlign: "center",
    left: 15,
    backgroundColor: "#F0F0F0",
    borderColor: "#0698fb",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  plays: {
    position: "absolute",
    bottom: 10,
    marginLeft: 138,
  },
  playss: {
    position: "absolute",
    bottom: 10,
    marginLeft: 138,
  },
  customSearchBar: {
    marginTop: 0,
  },
});

export default SubCatgory;
