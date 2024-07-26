import React, { useState } from 'react';
import { View, Text,ImageBackground, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { GStyle } from '../components/styles/Global';
import { Colors } from '../components/styles/Colours';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';



const SearchPage = () => {

  const navigation = useNavigation();

  const [selectedButton, setSelectedButton] = useState('Influencer');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(null);

  const handleSortOptionPress = (option) => {
    setSelectedSortOption(option);
    setShowSortOptions(false);
  };



  const renderSection = (title, seeMore, images, imageStyle) => (
    <View style={GStyle.sectionContainer}>
      <View style={GStyle.sectionHeader}>
        <Text style={GStyle.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={GStyle.sectionSeeMore}>{seeMore}
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
    <ScrollView style={[GStyle.container, { backgroundColor: Colors.dark.background }]}>
      <View style={[GStyle.container, GStyle.paddingMd]}>
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={24} color={Colors.grey} />
          <TextInput
            placeholder="Search Product,Store,brands"
            style={styles.searchInput}
            placeholderTextColor='#d3d3d3'
          />
          <FontAwesome name="microphone" size={24} color={Colors.grey} style={styles.micIcon} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'Local' ? styles.selectedButton : styles.unselectedButton
            ]}
            onPress={() => setSelectedButton('Local')}
          >
            <Text style={selectedButton === 'Local' ? styles.selectedButtonText : styles.unselectedButtonText}>
              Local
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'All Over India' ? styles.selectedButton : styles.unselectedButton
            ]}
            onPress={() => setSelectedButton('All Over India')}
          >
            <Text style={selectedButton === 'All Over India' ? styles.selectedButtonText : styles.unselectedButtonText}>
              All Over India
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categorySection}>
          <Text style={styles.categoryTitle}>Category</Text>
          <View style={styles.categoryRow}>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/images/product-local/c1.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>All Category</Text>
            </View>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/images/product-local/c2.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Fashion</Text>
            </View>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/images/product-local/c3.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Cosmetics</Text>
            </View>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/images/product-local/c4.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Stationary</Text>
            </View>
          </View>
          <View style={styles.categoryRow}>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/images/product-local/Group 21.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Item 1</Text>
            </View>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/images/product-local/Group 22.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Item 2</Text>
            </View>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/images/product-local/Group 23.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Item 3</Text>
            </View>
            <View style={styles.categoryItem}>
              <View style={styles.newLaunch}>
                <Text style={styles.newLaunchText}>NEW</Text>
                <Text style={styles.newLaunchText}>LAUNCH</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bannerSection}>
        <Image source={require('../assets/images/product-local/sale1.png')} style={styles.bannerImage} />
        <View style={styles.slider}>
          {[...Array(7).keys()].map((_, index) => (
            <View key={index} style={styles.sliderDot} />
          ))}
        </View>
        <Image source={require('../assets/images/product-local/sale2.png')} style={styles.bannerImage} />
      </View>


      <View style={styles.recentReelsSection}>
        <View style={styles.recentReelsHeader}>
          <Text style={styles.recentReelsTitle}>Recent Reels</Text>
          <Text style={styles.recentReelsTitle}>
          <AntDesign name="caretright" color={Colors.white} />
            Watch more 
          </Text>
        </View>
        <View style={styles.reelsRow}>
          <Image source={require('../assets/images/product-local/reel1.png')} style={styles.reelImage} />
          <Image source={require('../assets/images/product-local/reel2.png')} style={styles.reelImage} />
          <Image source={require('../assets/images/product-local/reel3.png')} style={styles.reelImage} />
        </View>
      </View>

      <View style={styles.bigDealsSection}>
        <ImageBackground source={require('../assets/images/product-local/rectangle-hot.png')} style={styles.rectangleHotImage}>
          <Image source={require('../assets/images/product-local/ellipse.png')} style={styles.ellipseImage} />
          <View style={styles.bigDealsContent}>
            <Text style={styles.bigDealsText}>BIG</Text>
            <Text style={styles.bigDealsText}>DEALS</Text>
            <TouchableOpacity style={styles.shopNowButton}>
              <Text style={styles.shopNowText}>Shop Now -</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../assets/images/product-local/girl.png')} style={styles.girlImage} />
        </ImageBackground>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#36454F',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    // borderColor: Colors.grey,
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
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  categorySection: {
    padding: 10,
   
    
  },
  categoryTitle: {
    fontSize: 18,
    color:Colors.white 
   
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    // paddingRight:5,
    
    
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    color:'red',
   
  },
  categoryImage: {
    width: 85,
    height: 85,
    borderRadius: 25,
    marginLeft:8,
    marginRight:8  
   
  },
  categoryText: {
    marginTop: 5,
    textAlign: 'center',
    color:Colors.white ,
    fontSize:12
  },
  newLaunch: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  newLaunchText: {
    textAlign: 'center',
    color:Colors.white 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 7,
    borderRadius: 5,
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
    width: '100%',
    marginVertical: 10,
  },
  slider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderDot: {
    width: 30,
    height: 5,
    borderRadius: 5,
    backgroundColor:Colors.grey,
    margin: 5,
  },

  recentReelsSection: {
    padding: 10,
  },
  recentReelsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentReelsTitle: {
    color:Colors.white 
  },
  reelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  reelImage: {
    // width: 100,
    // height: 150,
  },

  bigDealsSection: {
    padding: 10,
    alignItems: 'center',
  },
  rectangleHotImage: {
    width: '100%',
    height: 170,
    position: 'relative',
    resizeMode: 'cover',
    justifyContent: 'center',
    marginTop:50,
  },
  ellipseImage: {
    position: 'absolute',
    // left: 10,
    top: 0,
    // width: 200,
    // height: 200,
  },
  bigDealsContent: {
    position: 'absolute',
    left: 20,
    top: 10,
  },
  bigDealsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  shopNowButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  shopNowText: {
    color: '#fff',
  },
  girlImage: {
    position: 'absolute',
    right: 1,
    top: 1,
    width: 150,
    height: 150,
    marginBottom:5,
  },
  skincareSection: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skincareItem: {
    width: '30%',
  },
  skincareImage: {
    width: '100%',
    height: 100,
  },
  skincareText: {
    marginTop: 5,
    textAlign: 'center',
  },
  discountText: {
    textAlign: 'center',
    color: '#f00',
  },
  brandsSection: {
    padding: 10,
  },
  brandsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brandsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  brandsImage: {
    width: '48%',
    height: 100,
  },

});



export default SearchPage;
