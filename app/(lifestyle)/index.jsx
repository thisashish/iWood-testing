// app/lifestyle/index.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GStyle } from '../components/styles/Global';
import { Colors } from '../components/styles/Colours';
import Entypo from '@expo/vector-icons/Entypo';


const LifestylePage = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);
  const [seeMore, setSeeMore] = useState({
    Beauty: false,
    Gaming: false,
    Parenting: false,
    Animals: false,
    Fitness: false,
    Photography: false,
    Accessories: false,
    Clothing: false,
    Jewelry: false,
    Health: false
  });

  const navigateBack = () => {
    navigation.goBack();
  };

  const refreshPage = () => {
    setSelectedButton(null);
    setSeeMore({
      Beauty: false,
      Gaming: false,
      Parenting: false,
      Animals: false,
      Fitness: false,
      Photography: false,
      Accessories: false,
      Clothing: false,
      Jewelry: false,
      Health: false
    });
  };

  const handleImagePress = (title, image) => {
    if (title === 'Gaming Influencer') {
      navigation.navigate('Production', { profileData: image });
    } else {
      navigation.navigate('Profile', { profileData: image });
    }
  };

  const renderSection = (title, images, imageStyle, initialImageCount, nameStyle = {}, followersStyle = {},imageTextStyle) => {
    const showAll = selectedButton === title || seeMore[title];
    const imagesToShow = showAll ? images : images.slice(0, initialImageCount);

    return (
      <View style={GStyle.sectionContainer} key={title}>
        <View style={GStyle.sectionHeader}>
          <Text style={GStyle.sectionTitle}>{title}</Text>
          <TouchableOpacity onPress={() => setSeeMore(prev => ({ ...prev, [title]: !prev[title] }))}>
            <Text style={GStyle.sectionSeeMore}>{seeMore[title] ? 'See Less' : 'See More'}
            <Entypo name="chevron-small-down"  />
            </Text>
            
          </TouchableOpacity>
        </View>
        <View style={GStyle.imageContainer}>
          <View style={styles.flexRow}>
            {imagesToShow.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={styles.imageWrapper}
                onPress={() => handleImagePress(title, image)}
              >
                <Image source={image.uri} style={styles.image} />
                <View style={GStyle.imageFooter}>
                
                  <Image source={image.profileUri} style={GStyle.profileImage} />
                  <View style={imageTextStyle}>
                    <Text style={[GStyle.profileName, nameStyle]}>{image.name}</Text>
                    <Text style={[GStyle.profileFollowers, followersStyle]}>{image.followers}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };

  const sections = {
    Beauty: renderSection(
      'Beauty',
      [
        { uri: require('../assets/images/lifestyle/beauty/beauty2.png'), profileUri: 'https://example.com/profile4.jpg', name: '', followers: '' },
        { uri: require('../assets/images/lifestyle/beauty/beauty9.png'), profileUri: 'https://example.com/profile5.jpg', name: '', followers: '50+M' },
        { uri: require('../assets/images/lifestyle/beauty/beauty10.png'), profileUri: 'https://example.com/profile6.jpg', name: '', followers: '60+M' },
        { uri: require('../assets/images/lifestyle/beauty/beauty3.png'), profileUri: 'https://example.com/profile4.jpg', name: '', followers: '' },
        { uri: require('../assets/images/lifestyle/beauty/beauty9.png'), profileUri: 'https://example.com/profile5.jpg', name: '', followers: '50+M' },
        { uri: require('../assets/images/lifestyle/beauty/beauty5.png'), profileUri: 'https://example.com/profile6.jpg', name: '', followers: '60+M' },
        { uri: require('../assets/images/lifestyle/beauty/beauty6.png'), profileUri: 'https://example.com/profile6.jpg', name: '', followers: '60+M' },
        { uri: require('../assets/images/lifestyle/beauty/beauty7.png'), profileUri: 'https://example.com/profile6.jpg', name: '', followers: '60+M' },
        { uri: require('../assets/images/lifestyle/beauty/beauty2.png'), profileUri: 'https://example.com/profile6.jpg', name: '', followers: '60+M' },
        { uri: require('../assets/images/lifestyle/beauty/beauty9.png'), profileUri: 'https://example.com/profile6.jpg', name: '', followers: '60+M' },
        { uri: require('../assets/images/lifestyle/beauty/beauty10.png'), profileUri: 'https://example.com/profile6.jpg', name: '', followers: '60+M' },
        { uri: require('../assets/images/lifestyle/beauty/beauty11.png'), profileUri: 'https://example.com/profile6.jpg', name: '', followers: '60+M' },
      ],
      GStyle.squareImage,
      2
    ),
    Gaming: renderSection(
      'Gaming Influencer',
      [
        { uri: require('../assets/images/lifestyle/gaming1.png'), profileUri: require('../assets/images/profile.png'), name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/lifestyle/gaming2.png'), profileUri: require('../assets/images/profile.png'), name: 'Brand Name', followers: '50+M' },
        { uri: require('../assets/images/lifestyle/gaming3.png'), profileUri: require('../assets/images/profile.png'), name: 'Brand Name', followers: '60+M' },
        { uri: require('../assets/images/lifestyle/gaming3.png'), profileUri: require('../assets/images/profile.png'), name: 'Brand Name', followers: '60+M' },
      ],
      GStyle.squareImage,
      3
    ),
    Parenting: renderSection(
      'Parenting Influencer',
      [
        { uri: require('../assets/images/lifestyle/parenting1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/lifestyle/parenting2.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
        { uri: require('../assets/images/lifestyle/parenting1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
      ],
      GStyle.squareImage,
      2
    ),
    Animals: renderSection(
      'Animal Related Influencer',
      [
        { uri: require('../assets/images/lifestyle/animal1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/lifestyle/animal2.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
        { uri: require('../assets/images/lifestyle/animal3.png'), profileUri: 'https://example.com/profile6.jpg', name: 'Brand Name', followers: '60+M' },
      ],
      GStyle.squareImage,
      3,
      styles.animalNameStyle,
      styles.animalFollowersStyle,
      styles.animalImageTextStyle
    ),


    Fitness: renderSection(
      'Fitness',
      [
        { uri: require('../assets/images/lifestyle/fitness1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/lifestyle/fitness2.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },

      ],
      GStyle.squareImage,
      2
    ),

    Photography: renderSection(
      'Photography Influencer',
      [
        { uri: require('../assets/images/lifestyle/photography1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/lifestyle/photography2.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
        { uri: require('../assets/images/lifestyle/photography3.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
      ],
      GStyle.squareImage,
      3
    ),

    Accessories: renderSection(
      'Accessories',
      [
        { uri: require('../assets/images/lifestyle/accessories1.png'), name: 'Accessories', followers: '36k Followers' },
        { uri: require('../assets/images/lifestyle/accessories2.png'), name: 'Accessories', followers: '36k Followers' },
        { uri: require('../assets/images/lifestyle/accessories3.png'), name: 'Accessories', followers: '36k Followers' },
      ],
      GStyle.squareImage,
      2,
      styles.accessoriesNameStyle,
      styles.accessoriesFollowersStyle
    ),

    Clothing: renderSection(
      'Clothing Influencer',
      [
        { uri: require('../assets/images/lifestyle/clothing1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/lifestyle/clothing1.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
        { uri: require('../assets/images/lifestyle/clothing1.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
      ],
      GStyle.squareImage,
      3
    ),

    Jewelry: renderSection(
      'Jewelry Influencer',
      [
        { uri: require('../assets/images/Jewelry1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/Jewelry2.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
        { uri: require('../assets/images/Jewelry3.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
      ],
      GStyle.squareImage,
      3
    ),

    Health: renderSection(
      'Healthy Life With Influencer ',
      [
        { uri: require('../assets/images/health1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/health2.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
      ],
      GStyle.squareImage,
      2
    ),

  };

  return (
    <ScrollView style={[GStyle.container, { backgroundColor: Colors.dark.background }]}>
      <View style={[GStyle.container, GStyle.paddingMd]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
            <FontAwesome name="arrow-left" size={20} color={Colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerText} onPress={refreshPage}>Lifestyle</Text>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="search" size={20} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="heart" size={20} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="camera" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          {['Beauty', 'Gaming', 'Parenting', 'Animals'].map((button) => (
            <TouchableOpacity
              key={button}
              style={[
                styles.filterButton,
                selectedButton === button ? styles.selectedButton : styles.unselectedButton
              ]}
              onPress={() => {
                setSelectedButton(button);
                setSeeMore(prev => ({ ...prev, [button]: true }));
              }}
            >
              <Text style={selectedButton === button ? styles.selectedButtonText : styles.unselectedButtonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedButton ? sections[selectedButton] : Object.values(sections)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    color: Colors.white,
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    padding: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: Colors.white,
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  filterButtonText: {
    color: Colors.white,
    marginLeft: 5,
  },
  image: {
    marginLeft: 8,
    // flex: 1,
    // resizeMode: 'cover',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  imageWrapper: {

  },
  selectedButton: {
    backgroundColor: Colors.white,
  },
  unselectedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.white,
  },
  selectedButtonText: {
    color: Colors.black,
  },
  unselectedButtonText: {
    color: Colors.white,
  },
  accessoriesNameStyle: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 0
  },
  accessoriesFollowersStyle: {
    color: Colors.white,
    fontSize: 7,
    marginBottom: 20,
    paddingTop: 0,
    marginTop: 0
  },
  animalNameStyle:{
// backgroundColor:Colors.primary
  },

  animalFollowersStyle:{

  },

  animalImageTextStyle:{
backgroundColor:'red',

  }
});

export default LifestylePage;
