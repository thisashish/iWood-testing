// app/lifestyle/index.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GStyle } from '../components/styles/Global';
import { Colors } from '../components/styles/Colours';

const LifestylePage = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);
  const [seeMore, setSeeMore] = useState({
    Beauty: true,
    Gaming: false,
    Parenting: false,
    Animals: false,
    Fitness:false,
    Photography:false,
    Accessories:false,
    Clothing:false,
    Jewelry:false,
    Healthlife:false,
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
      Fitness:false,
      Photography:false,
      Accessories:false,
      Clothing:false,
      Jewelry:false,
      Healthlife:false,
    });
  };

  const handleImagePress = (title, image) => {
    if (title === 'Gaming Influencer') {
      navigation.navigate('Production', { profileData: image });
    } else {
      navigation.navigate('Profile', { profileData: image });
    }
  };

  const renderSection = (title, images, imageStyle) => {
    const showAll = selectedButton === title || seeMore[title];
    const imagesToShow = showAll ? images : images.slice(0, 3);

    return (
      <View style={GStyle.sectionContainer} key={title}>
        <View style={GStyle.sectionHeader}>
          <Text style={GStyle.sectionTitle}>{title}</Text>
          <TouchableOpacity onPress={() => setSeeMore(prev => ({ ...prev, [title]: !prev[title] }))}>
            <Text style={GStyle.sectionSeeMore}>{seeMore[title] ? 'See Less' : 'See More'}</Text>
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
                  <Image source={{ uri: image.profileUri }} style={GStyle.profileImage} />
                  <View>
                    <Text style={GStyle.profileName}>{image.name}</Text>
                    <Text style={GStyle.profileFollowers}>{image.followers}</Text>
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
      GStyle.squareImage
    ),
    Gaming: renderSection(
      'Gaming Influencer',
      [
        { uri: require('../assets/images/lifestyle/gaming1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/lifestyle/gaming2.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
        { uri: require('../assets/images/lifestyle/gaming3.png'), profileUri: 'https://example.com/profile6.jpg', name: 'Brand Name', followers: '60+M' },
        { uri: require('../assets/images/lifestyle/gaming3.png'), profileUri: 'https://example.com/profile6.jpg', name: 'Brand Name', followers: '60+M' },
      ],
      GStyle.squareImage
    ),
    Parenting: renderSection(
      'Parenting Influencer',
      [
        { uri: require('../assets/images/lifestyle/parenting1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/lifestyle/parenting2.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
        
      ],
      GStyle.squareImage
    ),
    Animals: renderSection(
      'Animal Related Influencer',
      [
        { uri: require('../assets/images/lifestyle/animal1.png'), profileUri: 'https://example.com/profile4.jpg', name: 'Brand Name', followers: '' },
        { uri: require('../assets/images/lifestyle/animal2.png'), profileUri: 'https://example.com/profile5.jpg', name: 'Brand Name', followers: '50+M' },
         { uri: require('../assets/images/lifestyle/animal3.png'), profileUri: 'https://example.com/profile6.jpg', name: 'Brand Name', followers: '60+M' },
      ],
      GStyle.squareImage
    ),

    Fitness: renderSection(
      'Fitness',
      [
        { uri:require('../assets/images/lifestyle/fitness1.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/fitness2.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
      ],
      GStyle.squareImage
    ),
    Photography: renderSection(
      'Photography influencer',
      [
        { uri:require('../assets/images/lifestyle/photography1.png'),profileUri:'https://example.com/profile4.jpg',name:'Ayushi Chore',followers:'1.23k Followers'},
        { uri:require('../assets/images/lifestyle/photography2.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/photography3.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
      ],
      
    ),
    Accessories: renderSection(
      'Accessories',
      [
        { uri:require('../assets/images/lifestyle/accessories1.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/accessories2.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/accessories3.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},

      ],
      GStyle.squareImage
    ),
    Clothing: renderSection(
      'Clothing influencer',
      [
        { uri:require('../assets/images/lifestyle/clothing1.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/clothing2.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/clothing3.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},

      ],
      GStyle.squareImage
    ),
    Jewelry: renderSection(
      'Jewelry influencer',
      [
        { uri:require('../assets/images/lifestyle/jewel1.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/jewel2.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/jewel3.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},

      ],
      GStyle.squareImage
    ),
    Healthlife: renderSection(
      'Healthy Life with Influencer',
      [
        { uri:require('../assets/images/lifestyle/health1.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/health2.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},
        { uri:require('../assets/images/lifestyle/health3.png'),profileUri:'https://example.com/profile4.jpg',name:'Brand Name',followers:''},

      ],
      GStyle.squareImage
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
          {['Beauty', 'Gaming', 'Parenting', 'Animals','Fitness','Phototgraphy','jewelley'].map((button) => (
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
  
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  imageWrapper: {
    // flexBasis: '48%', 
    // marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: Colors.white,
  },
  unselectedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  selectedButtonText: {
    color: Colors.black,
  },
  unselectedButtonText: {
    color: Colors.white,
  },
});

export default LifestylePage;
