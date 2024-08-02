
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import { GStyle } from "../components/styles/Global";
import { Colors } from "../components/styles/Colours";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import CustomProfile from "../components/CustomProfile";
import CircleItem from '../components/CircleItem';
import CustomSearchBar from '../components/CustomSearchBar';








const ProductDetails = () => {
    const navigation = useNavigation();
    const [selectedButton, setSelectedButton] = useState(null);
    const [showSortOptions, setShowSortOptions] = useState(false);
  
    const handleButtonPress = (button) => {
      setSelectedButton(button);
    };
  
    const handlePress = (productId) => {
      navigation.navigate('ProductDetails', { productId });
    };
    const renderSection = (title, seeMore, images, imageStyle) => (
        <View style={GStyle.sectionContainer}>
          <View style={GStyle.sectionHeader}>
            <Text style={GStyle.sectionTitle}>{title}</Text>
            <TouchableOpacity>
              <Text style={GStyle.sectionSeeMore}>
                {seeMore}
                <Entypo name="chevron-small-down" />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={GStyle.imageContainer}>
            <View style={styles.flexRow}>
              {images.map((image, index) => (
                <View key={index} style={[imageStyle, { marginRight: 10 }]}>
                  <Image source={image.uri} style={styles.image} />
                  <View style={GStyle.imageFooter}>
                    <Image source={image.profileUri} style={GStyle.profileImage} />
                    <View>
                      <Text style={GStyle.profileName}>{image.name}</Text>
                      <Text style={GStyle.profileFollowers}>{image.followers}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      );

return (
    <ScrollView
    style={[GStyle.container, { backgroundColor: Colors.dark.background }]}
  >
    

    <View style={styles.DressSection}>
    
     <View>
     <Text style={styles.DressTitle}>
    Western dresses printed
    </Text>
        <Image source={require("../assets/images/(product details)/shape1.png")}/>
        <Image source={require("../assets/images/(product details)/shape2.png")} style={styles.girl1}/>
        <Image source={require("../assets/images/(product details)/scale1.png")}style={styles.scales1}/>
        <Image source={require("../assets/images/(product details)/scale2.png")}style={styles.scales}/>
        <Image source={require("../assets/images/(product details)/similar.png")}style={styles.similar}/>
        <Image source={require("../assets/images/(product details)/square.png")}style={styles.square1}/>
        <Image source={require("../assets/images/(product details)/square.png")}style={styles.square2}/>
        <Image source={require("../assets/images/(product details)/square.png")}style={styles.square3}/>
        <Image source={require("../assets/images/(product details)/photo1.png")}style={styles.photo1}/>
        <Image source={require("../assets/images/(product details)/photo2.png")}style={styles.photo2}/>
        <Image source={require("../assets/images/(product details)/photo3.png")}style={styles.photo3}/>
        <Image source={require("../assets/images/(product details)/circle1.png")}style={styles.photo33}/>
        <Image source={require("../assets/images/(product details)/circle2.png")}style={styles.photo333}/>
        <Image source={require("../assets/images/(product details)/circle3.png")}style={styles.photo}/>
        <Image source={require("../assets/images/(product details)/shape.png")}style={styles.shape}/>
        <Image source={require("../assets/images/(product details)/circle4.png")}style={styles.circle4}/>
        </View>
        </View>
       
        <View style={styles.CollectionSection}>
            <View style={styles.CollectionHeader}>
        <Text style={styles.Collection}>
    Unique Collection
    </Text>
    <Text style={styles.Collection}>
    <AntDesign name="star" size={13} color="yellow" />
    4.9|5  
    </Text>
    
    </View>

        <Text style={styles.CollectionTitle}>
    Western dresses printed
    </Text>
    <View style={styles.CollectionHeader}>
    <Text style={styles.Cost}>
    Rs.299
    </Text>
    <Text style={styles.Costing}>
    Rs.499
    </Text>
    <Text style={styles.Costs}>
    45% OFF
    </Text>
    </View>
    <Image source={require("../assets/images/(product details)/line.png")}style={styles.line}/>
    <View>
    <Image source={require("../assets/images/(product details)/rectangle.png")}style={styles.rectangle}/>
    <Text style={styles.inside}>Best price<Text style={styles.inside1}> Rs.499</Text> with coupon <Text style={styles.inside1}>SAVE#123</Text></Text>
    <Text style={styles.insides}>Rs. 200 Off on orders of 3 or more items</Text>
    </View>
    <Image source={require("../assets/images/(product details)/line.png")}style={styles.line}/>

    <Text style={styles.color}>
    Colour
    </Text>
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
    girl1:{
    position:'absolute',
     bottom:50,
     marginLeft:120,
     
    },photo:{
        position:'absolute',
        top:190,
        marginLeft:100,
    },shape:{
        position:'absolute',
        bottom:12,
        marginLeft:0,
    },
    scales:{
        position:'absolute',
        bottom:250,
        marginLeft:300,
    },
    scales1:{
        position:'absolute',
        top:200,
        marginLeft:300,
    },
    similar:{
        position:'absolute',
        top:380,
        marginLeft:270,
    },
    square1:{
        position:'absolute',
        top:80,
        marginLeft:10,
    },
    square2:{
        position:'absolute',
        top:180,
        marginLeft:10,
    },
    square3:{
        position:'absolute',
        top:280,
        marginLeft:10,
    },
    photo1:{
        position:'absolute',
        top:85,
        marginLeft:17,
    },
    photo2:{
        position:'absolute',
        top:185,
        marginLeft:17,
    },
    photo3:{
        position:'absolute',
        top:285,
        marginLeft:17,
    },photo33:{
        position:'absolute',
        top:150,
        marginLeft:250,
    },photo333:{
        position:'absolute',
        top:350,
        marginLeft:240,
    },circle4:{
        position:'absolute',
        top:380,
        marginLeft:100,
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
      marginHorizontal: 5,
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
  
    DressSection: {
      padding: 10,
      marginTop:50,
    },
    CollectionSection:{
        padding: 10,

    },Collection:{
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 1,
    },
    CollectionTitle:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
    },
    CollectionHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    Cost:{
        fontSize: 20,
        color: '#0698FB',
        fontWeight: 'bold',
        marginTop: 3,
    },
    Costing:{
        fontSize: 18,
        color: '#6E6E6E',
        
        marginTop: 3,
        right:85,
        textDecorationLine: 'line-through',
    },
    Costs:{
        fontSize: 14,
        color: '#0698FB',
        
        marginTop: 3,
    },
    line:{
        marginTop:8,
    },
    rectangle:{
        marginTop:15,
        marginBottom:10,
    },
    inside:{
position:'absolute',
color:Colors.grey,
top:22,
left:10,
    },
    inside1:{
        position:'absolute',
        color:Colors.white,
        top:18,
        left:10,
        fontWeight:'bold',
    },
    insides:{
        position:'absolute',
        color:Colors.grey,
        top:43,
        left:10,
        fontSize:12,
    },color:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
    },
    section: {
      paddingHorizontal: 20,
      marginTop: 10,
    },
    scrollView: {
      marginBottom: 10, // Adjust as needed
    },
    DressTitle: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
        position: 'absolute',
        zIndex: 2, // Ensure text is in front of the images
  
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
      marginTop:10,
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
    },firstRowText: {
      marginLeft:12,
      position:'absolute',
      bottom:15,
      color: Colors.white,
      fontWeight: 'bold',
      fontSize:12 
    },
    secondRowText: {
      marginLeft:12,
      fontSize:10,
      position:'absolute',
      bottom:0,
      color: Colors.whitesmoke,
    },firstlineText: {
      marginLeft:12,
      position:'absolute',
      bottom:60,
      color: '#0698fb',
      fontWeight: '900',
      fontSize:10,
      textAlign:'center', 
      left:15,
      backgroundColor:Colors.white,
      borderColor:'#0698fb',
      borderWidth:1,
      padding: 5,
    },
    secondlineText:{
      marginLeft:5,
      position:'absolute',
      bottom:40,
      color: Colors.white,
      fontWeight:'700',
      fontSize:13,
      textAlign:'center', 
      left:20,
    },
    thirdlineText:{
      marginLeft:5,
      position:'absolute',
      bottom:25,
      color: '#0698fb',
    fontWeight:'700',
      fontSize:12,
      textAlign:'center', 
      left:15,
    },textContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      position: 'absolute',
      bottom:-27,
      width: '100%', // Full width of the image
      alignItems: 'left',
      padding: 0,
      width: '100%', // Full width of the image
      alignItems: 'center',
      marginBottom:5,
      borderWidth:1,
      borderColor:Colors.secondary,
      
    },
    text: {
      color: 'white',
      fontSize: 12,
      textAlign: 'left',
      marginRight:65,
      fontWeight:'500',
    },
  texts:{
    color: 'white',
    fontSize: 10,
    textAlign: 'left',
    marginRight:60,
    color:'#0698fb',
    fontWeight:'600',
    
  },firstlineTexts: {
    marginLeft:12,
    position:'absolute',
    bottom:30,
    color: '#0698fb',
    fontWeight: '900',
    fontSize:10,
    textAlign:'center', 
    left:15,
    backgroundColor:'#F0F0F0',
    borderColor:'#0698fb',
    borderWidth:1,
    padding: 5,
    borderRadius:10,
  },
  plays:{
    position:'absolute',
    bottom:10,
    marginLeft:138,
  },
  playss:{
    position:'absolute',
    bottom:10,
    marginLeft:138,
  },
});

export default ProductDetails;