import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { GStyle } from '../components/styles/Global';
import { Colors } from '../components/styles/Colours';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import CategorySection from '../components/CategorySection';
import CategoryItem from '../components/CategoryItem';



const ProductPage = () => {

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


  const categories = [
    { image: require('../assets/images/product-local/c1.png'), title: 'All Category' },
    { image: require('../assets/images/product-local/c2.png'), title: 'Fashion' },
    { image: require('../assets/images/product-local/c3.png'), title: 'Cosmetics' },
    { image: require('../assets/images/product-local/c4.png'), title: 'Stationary' },
  ];

  const secondCategory = [
    { image: require('../assets/images/product-local/Group 21.png'), title: 'Footwear' },
    { image: require('../assets/images/product-local/Group 22.png'), title: 'Electronics' },
    { image: require('../assets/images/product-local/Group 23.png'), title: 'Jewelry' },
  
  
  ];

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
          <CategorySection categories={categories} />
          
          <View style={styles.categoryRow}>
      {secondCategory.map((category, index) => (
        <CategoryItem
          key={index}
          imageSource={category.image}
          text={category.title}
        />
      ))}
      <CategoryItem isNewLaunch />
    </View>

       
        </View>

        <View style={styles.bannerSection}>
          <Image source={require('../assets/images/product-local/sale1.png')} style={styles.bannerImage} />
          <View style={styles.slider}>
            {[...Array(7).keys()].map((_, index) => (
              <View key={index} style={styles.sliderDot} />
            ))}
          </View>
          
        </View>

        <Image source={require('../assets/images/product-local/sale2.png')} style={styles.bannerImage} />


        <View style={styles.recentReelsSection}>
          <View style={styles.recentReelsHeader}>
            <Text style={styles.recentReelsTitle}>Recent Reels</Text>
            <Text style={styles.recentReelsTitle}>
            <AntDesign name="caretright" size={15} color="white" />
              Watch more
            </Text>
          </View>
          <View style={styles.reelsRow}>
            <View>
            <Image source={require('../assets/images/product-local/reel1.png')}  style={styles.reelImage} />
            <AntDesign name="caretright" size={20} color="white"   style={styles.play} />
            <Image source={require('../assets/images/product-local/circc.png')} style={styles.play}/> 
            </View>
            <View>
            <Image source={require('../assets/images/product-local/reel2.png')} style={styles.reelImage} />
            <AntDesign name="caretright" size={20} color="white"   style={styles.play} />
            <Image source={require('../assets/images/product-local/circc.png')} style={styles.play}/> 
            </View>
            <View>
            <Image source={require('../assets/images/product-local/reel3.png')} style={styles.reelImage} />
            <AntDesign name="caretright" size={20} color="white"   style={styles.play} />
            <Image source={require('../assets/images/product-local/circc.png')} style={styles.play}/> 
            </View>
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
          </ImageBackground>
          <Image source={require('../assets/images/product-local/girl.png')} style={styles.girlImage} />

          <View style={styles.reactRow}>
          <View style={styles.skincareSection}>
            <View style={styles.skincareItem}>
              <Image source={require('../assets/images/product-local/rect1.png')} style={styles.reelimage} />
              <Text style={styles.firstRowText}>Effective Skincare</Text>
              <Text style={styles.secondRowText}>Up To 35% OFF</Text>
            </View>
            <View style={styles.skincareItem}>
              <Image source={require('../assets/images/product-local/rect2.png')} style={styles.reelimage} />
              <Text style={styles.firstRowText}>Sensitive Skincare</Text>
              <Text style={styles.secondRowText}>Up To 35% OFF</Text>
            </View>
            <View style={styles.skincareItem}>
              <Image source={require('../assets/images/product-local/rect3.png')} style={styles.reelimage} />
              <Text style={styles.firstRowText}>Effective Skincare</Text>
              <Text style={styles.secondRowText}>Up To 35% OFF</Text>
            </View>
          </View>
        </View>

          {/* <View style={styles.reactRow}>
            <Image source={require('../assets/images/product-local/rect1.png')} style={styles.reelimage} />
            <Image source={require('../assets/images/product-local/rect2.png')} style={styles.reelimage} />
            <Image source={require('../assets/images/product-local/rect3.png')} style={styles.reelimage} />
          </View> */}

          <View style={styles.brandsSection}>
            <Text style={styles.brandsTitle}>Brands Of The weeks</Text>
            <View style={styles.brandsRow}>
              <View>
              <Image source={require('../assets/images/product-local/brands1.png')} style={styles.reelimage} />
              <AntDesign name="caretright" size={20} color="white"   style={styles.playy} />
              <Image source={require('../assets/images/product-local/circc.png')} style={styles.playy}/>
              </View>
              <View>
              <Image source={require('../assets/images/product-local/brands2.png')} style={styles.reelimage} />
              <AntDesign name="caretright" size={20} color="white"   style={styles.playy} />
              <Image source={require('../assets/images/product-local/circc.png')} style={styles.playy}/>
              </View>
            </View>
          </View>
          <View style={styles.bigDealsSection}>
            <Image source={require('../assets/images/product-local/sale3.png')} />
          </View>


          <Text style={styles.recentReelsTitle}>Deel Ends in <Text style={styles.sale}> 13h : 57m : 46s</Text> </Text>

          <View style={styles.reactRow}>
        <View>
        <Image source={require('../assets/images/product-local/bname1.png')} style={styles.bnameImage} />
            <Text style={styles.firstlineText}>Brands Name</Text>
              <Text style={styles.secondlineText}>Under Rs.499</Text>
              <Text style={styles.thirdlineText}>+Extra 20% OFF</Text>
        </View>
          <View>
          <Image source={require('../assets/images/product-local/bname2.png')} style={styles.bnameImage} />
          <Text style={styles.firstlineText}>Brands Name</Text>
          <Text style={styles.secondlineText}>Under Rs.499</Text>
          <Text style={styles.thirdlineText}>+Extra 20% OFF</Text>
          </View>
            <View>
            <Image source={require('../assets/images/product-local/bname3.png')} style={styles.bnameImage} />
            <Text style={styles.firstlineText}>Brands Name</Text>
            <Text style={styles.secondlineText}>Under Rs.499</Text>
            <Text style={styles.thirdlineText}>+Extra 20% OFF</Text>
            </View>
          
          </View>

          </View>
          <View style={styles.bigDealsSections}>
          <Text style={styles.recentReelsTitle}>  Most Loved Brands</Text>
          <View style={styles.reactRow}>
            <View>
            <Image source={require('../assets/images/product-local/shoes.png')} style={styles.bnameImage} />
            <AntDesign name="caretright" size={20} color="white"   style={styles.playy} />
            <Image source={require('../assets/images/product-local/circc.png')} style={styles.playy}/>
            </View>
            <View>
            <Image source={require('../assets/images/product-local/beg.png')} style={styles.bnameImage} />
            <AntDesign name="caretright" size={20} color="white"   style={styles.playy} />
            <Image source={require('../assets/images/product-local/circc.png')} style={styles.playy}/>
            </View>

          </View>
         

          <Text style={styles.recentReelsTitle}>  Budget Buys</Text>
          <View style={styles.reactRow}>
            <View>
            <Image source={require('../assets/images/product-local/budget1.png')} style={styles.bnameImage} />
            <Text style={styles.firstText}>Dresses</Text>
              <Text style={styles.secondText}>Under Rs.499</Text>
            </View>
            <View>
            <Image source={require('../assets/images/product-local/budget2.png')} style={styles.bnameImage} />
            <Text style={styles.firstText}>Beauty</Text>
            <Text style={styles.secondText}>Under Rs.299</Text>
            </View>
            <View>
            <Image source={require('../assets/images/product-local/budget3.png')} style={styles.bnameImage} />
            <Text style={styles.firstText}>Perfume</Text>
            <Text style={styles.secondText}>Under Rs.199</Text>
            </View>
          </View>
          </View>


        



        <View style={styles.bigDealsSection}>
          <Image source={require('../assets/images/product-local/sale4.png')} />
        </View>
        <View style={styles.recentReelsSection}>
          <View style={styles.recentReelsHeader}>
            <Text style={styles.recentReelsTitle}> Top 10 influencer Reels</Text>
            <Text style={styles.recentReelsTitle}>
              <AntDesign name="caretright" color={Colors.white} />
              Watch more
            </Text>

          </View>
          <View style={styles.reactRow}>
            <View>
            <Image source={require('../assets/images/product-local/inf1.png')} style={styles.bnameImage} />
            <AntDesign name="caretright" size={20} color="white"   style={styles.plays} />
            <Image source={require('../assets/images/product-local/circc.png')} style={styles.plays}/> 
            </View>
            <View>
            <Image source={require('../assets/images/product-local/inf2.png')} style={styles.bnameImage} />
            <AntDesign name="caretright" size={20} color="white"   style={styles.plays} />
            <Image source={require('../assets/images/product-local/circc.png')} style={styles.plays}/> 
            </View>
            <View>
            <Image source={require('../assets/images/product-local/inf3.png')} style={styles.bnameImage} />
            <AntDesign name="caretright" size={20} color="white"   style={styles.plays} />
            <Image source={require('../assets/images/product-local/circc.png')} style={styles.plays}/> 
            </View>
          </View>


          <Text style={styles.recentReelsTitle}>  You Might also like</Text>
          <View style={styles.reactRow}>
            <ImageBackground>
            <Image source={require('../assets/images/product-local/handbag1.png')} style={styles.bagImage} />
            <View style={styles.textContainer}>
          <Text style={styles.text}>Hand Bags</Text>
          <Text style={styles.texts}>64% OFF</Text>
          
        </View>
            </ImageBackground>
            <ImageBackground>
            <Image source={require('../assets/images/product-local/handbag2.png')} style={styles.bagImage} />
            <View style={styles.textContainer}>
            <Text style={styles.text}>Hand Bags</Text>
            <Text style={styles.texts}>64% OFF</Text>
        </View>
            </ImageBackground>
            <ImageBackground>
            <Image source={require('../assets/images/product-local/handbag3.png')} style={styles.bagImage} />
            <View style={styles.textContainer}>
            <Text style={styles.text}>Hand Bags</Text>
            <Text style={styles.texts}>64% OFF</Text>
          
        </View>
            </ImageBackground>
          </View>


          <View style={styles.recentReelsSection}>
            <View style={styles.recentReelsHeader}>
              <Text style={styles.recentReelsTitle}>Continue Browsing These Styles</Text>
              <Text style={styles.recentReelsTitle}>
                <AntDesign name="caretright" color={Colors.white} />
                Watch more
              </Text>

            </View>
            <View style={styles.reactRow}>
              <View>
              <Image source={require('../assets/images/product-local/reel1.png')} style={styles.bnameImage} />
              <AntDesign name="caretright" size={20} color="white"   style={styles.plays} />
              <Image source={require('../assets/images/product-local/circc.png')} style={styles.plays}/> 
              </View>
              <View>
              <Image source={require('../assets/images/product-local/reel2.png')} style={styles.bnameImage} />
              <AntDesign name="caretright" size={20} color="white"   style={styles.plays} />
              <Image source={require('../assets/images/product-local/circc.png')} style={styles.plays}/> 
              </View>
              <View>
              <Image source={require('../assets/images/product-local/reel3.png')} style={styles.bnameImage} />
              <AntDesign name="caretright" size={20} color="white"   style={styles.plays} />
              <Image source={require('../assets/images/product-local/circc.png')} style={styles.plays}/>
              </View>
            </View>
          </View>

        </View>
        <View style={styles.bigDealsSection}>
          <ImageBackground source={require('../assets/images/product-local/bg.png')} style={styles.rectangleHotImages}>
            <Image source={require('../assets/images/product-local/ellipse1.png')} style={styles.ellipse1Image} />
            <View style={styles.bigDealsContent}>
              <Text style={styles.bigDealsText}>Hottest</Text>
              <Text style={styles.bigDealsText}>Trends</Text>
              <TouchableOpacity style={styles.shopNowButton}>
                <Text style={styles.shopNowText}>Shop Now -</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <Image source={require('../assets/images/product-local/hotTrend.png')} style={styles.girlImages} />

        </View>

        <View style={styles.reactRow}>
          <View>
          <Image source={require('../assets/images/product-local/dress.png')} style={styles.reelimage} />
          <Text style={styles.firstRowText}>Dresses</Text>
              <Text style={styles.secondRowText}>Up To 35% OFF</Text>
              </View>
              <View>
          <Image source={require('../assets/images/product-local/shorts1.png')} style={styles.reelimage} />
          <Text style={styles.firstRowText}>Shorts</Text>
              <Text style={styles.secondRowText}>Up To 35% OFF</Text>
              </View>
              <View>
          <Image source={require('../assets/images/product-local/shorts2.png')} style={styles.reelimage} />
          <Text style={styles.firstRowText}>Shorts</Text>
              <Text style={styles.secondRowText}>Up To 35% OFF</Text>
              </View>
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
    color: Colors.white

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
    color: 'red',

  },
  reelimage: {
    marginHorizontal: 5, // Add horizontal margin to each image
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
    color: Colors.white,
    fontStyle:'bold',
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
    backgroundColor: Colors.grey,
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
    color: Colors.white,
    marginTop:10,
    fontWeight:'500',
    fontSize:16,

  },
  recentReelsTitles:{
   color:Colors.white,
   textAlign:'left',
   fontWeight:'bold',
  },
  ellipse1Image: {
    position: 'absolute',
    top: 0,
    width: 200,
    margin: 0,


  },
  girl1Image: {
    position: 'absolute',
    right: 0,
    top: 25,
    width: 180,
    height: 185,
    marginTop: 0,

  },
  reelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  reactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  reelImage: {
    // width: 100,
    // height: 150,
  },

  bigDealsSection: {
    padding: 10,
    alignItems: 'center',
  },
  bigDealsSections:{
padding:10,
  },
  rectangleHotImage: {
    width: '100%',
    height: 150,
    position: 'relative',
    resizeMode: 'cover',
    justifyContent: 'center',
    marginTop: 50,
  },
  rectangleHotImages: {
    width: '100%',
    height: 150,
    position: 'relative',
    resizeMode: 'cover',
    justifyContent: 'center',
    marginTop: 20,

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
    backgroundColor: '#0698fb',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    width: 100,


  },
  shopNowText: {
    color: '#fff',
  },
  girlImage: {
    position: 'absolute',
    right: 0,
    top: 25,
    width: 180,
    height: 185,
    marginTop: 0,


  },
  girlImages: {
    position: 'absolute',
    right: 25,
    top: 0,

    width: 180,
    height: 185,
    marginTop: 0,

  },
  skincareSection: {
    // padding: 10,
    flexDirection: 'row',
   
    // justifyContent: 'space-between',
  },
  skincareItem: {
    // width: '35%',
  },
  skincareImage: {
    // width: '100%',
    // height: 100,
  },
  skincareText: {
    marginTop: 5,
    textAlign: 'center',
  },play:
  {
   position:'absolute',
   bottom:80,
   marginLeft:48,
  },
  plays:{
    position:'absolute',
    bottom:90,
    marginLeft:52,
  },
  playy:{
    position:'absolute',
    bottom:60,
    marginLeft:82,
  },
  firstRowText: {
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
  },
  firstlineText: {
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
  },
  firstText:{
    marginLeft:35,
    position:'absolute',
    bottom:25,
    color: Colors.white,
    fontWeight: '600',
    fontSize:12 ,
    textAlign:'Center',

  },secondText: {
    marginLeft:25,
    fontSize:10,
    position:'absolute',
    bottom:11,
    color: '#0698fb',
    fontWeight:'bold',

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

    color: Colors.white,
    textAlign: 'center',
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
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    position: 'absolute',
    bottom:-5,
    width: '100%', // Full width of the image
    alignItems: 'left',
    padding: 0,
    width: '100%', // Full width of the image
    alignItems: 'center',
    marginBottom:1,
  },
  text: {
    color: 'white',
    fontSize: 12,
    textAlign: 'left',
    marginRight:45,
    fontWeight:'500',
  },
texts:{
  color: 'white',
  fontSize: 10,
  textAlign: 'left',
  marginRight:60,
  color:'#0698fb',
  fontWeight:'600',
  
},
});



export default ProductPage;
