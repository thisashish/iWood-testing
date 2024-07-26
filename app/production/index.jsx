import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome,MaterialCommunityIcons,AntDesign,FontAwesome6,FontAwesome5 } from '@expo/vector-icons';
import { GStyle } from '../components/styles/Global';
import { Colors } from '../components/styles/Colours';
import { MaterialIcons } from '@expo/vector-icons';





const ProductionPage = () => {
    const navigation = useNavigation();
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (button) => {
        setSelectedButton(button);
        if (button === 'Brands') {
            navigation.navigate('ReelPage');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={Colors.white} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Profile</Text>
                <View style={styles.topRightIcons}>
                    <Ionicons name="notifications" size={24} color={Colors.white} style={styles.icon} />
                    <Ionicons name="person-circle" size={24} color={Colors.white} style={styles.profileSmall} />
                </View>
            </View>

            <View style={styles.bannerSection}>
            <Image source={require('../assets/images/production/banner.png')} style={styles.bannerImage} />
                <View style={styles.profileContainer}>
                    <Image source={require('../assets/images/production/profile.png')} style={styles.profileLarge} />
                </View>
            </View>

            <View style={styles.profileDetails}>
                <Text style={styles.profileName}>CD Production House</Text>
                <Text style={styles.profileBio}>
                    Photoshoot | Series | Modeling | Fashion | Drama
                </Text>
                
                <Text style={styles.profileLink}>4.5k Rating |<AntDesign name="link"  style={styles.profileLink} /> Portfolio Onine here</Text>

               
                

                <View style={styles.profileButtons}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.transparentButton]}>
                            <Text style={styles.buttonText}>Appointment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.transparentButton]}>
                            <Text style={styles.buttonText}>Connect</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.iconButton}>
                        <MaterialIcons name="search" size={24}  color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                        <FontAwesome5 name="facebook" size={24} color="#316FF6" style={styles.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                        <FontAwesome6 name="x-twitter" size={22} color="white"  style={styles.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                        <FontAwesome6 name="youtube" size={22} color="red"  style={styles.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.transparentButton,styles.transparentButton,selectedButton === 'dots-vertical' ? styles.selectedButton : null]}onPress={() => handleButtonPress('dots-vertical')}>
                            <MaterialCommunityIcons name="dots-horizontal" size={24} color={Colors.grey} />
                           
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.socialMediaSection}>
                <View style={styles.socialMediaItem}>
                    <Text style={styles.socialMediaText}>1.5k+</Text>
                    <Text style={styles.socialMediaSubText}>Projects done</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.socialMediaItem}>
                    <Text style={styles.socialMediaText}>150+</Text>
                    <Text style={styles.socialMediaSubText}>Brands Projects</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.socialMediaItem}>
                    <Text style={styles.socialMediaText}>100+</Text>
                    <Text style={styles.socialMediaSubText}>Shots & series</Text>
                </View>
            </View>


            <View style={styles.section}>
    <View style={styles.sectionHeader}></View>
    <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Our Team</Text>
        <TouchableOpacity>
            <Text style={[styles.sectionSeeMore, { color: Colors.grey }]}>See More</Text>
        </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
                <View style={styles.imageRow}>
                <View style={styles.imageContainer}>
                <Image source={require('../assets/images/profile/collabo1.png')} style={styles.circleImage} />
                <Text style={styles.imageLabel}>Celebrity</Text>
                </View>
                <View style={styles.imageContainer}>
                <Image source={require('../assets/images/profile/collabo2.png')} style={styles.circleImage} />
                <Text style={styles.imageLabel}>Influencer</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/profile/collabo3.png')} style={styles.circleImage} />
                    <Text style={styles.imageLabel}>Models</Text>
                    </View>
                    <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/profile/collabo4.png')} style={styles.circleImage} />
                    <Text style={styles.imageLabel}>Brand Celebrity</Text>
                    </View>
                    <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/profile/collabo5.png')} style={styles.circleImage} />
                    <Text style={styles.imageLabel}>Photos</Text>
                    </View>
    </View>
    </ScrollView>
</View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>My Portfolio</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Brands' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Brands')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Brands' ? styles.selectedButtonText : null]}>Brands</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Modeling' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Modeling')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Modeling' ? styles.selectedButtonText : null]}>Modeling</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Photoshoot' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Photoshoot')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Photoshoot' ? styles.selectedButtonText : null]}>Photoshoot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Series' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Series')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Series' ? styles.selectedButtonText : null]}>Series</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.portfolioButton,
                            selectedButton === 'Our Star' ? styles.selectedButton : null,
                        ]}
                        onPress={() => handleButtonPress('Our Star')}
                    >
                        <Text style={[styles.buttonText, selectedButton === 'Our Star' ? styles.selectedButtonText : null]}>Our Star</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageGrid}>
                    <Image source={require('../assets/images/production/team1.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team2.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team3.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team4.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team5.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team6.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team7.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team8.png')} style={styles.gridImage} />
                    <Image source={require('../assets/images/production/team8.png')} style={styles.gridImage} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    iconButton: {
        marginLeft: 15,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: Colors.dark.background,
    },
    icon: {
        width: 24,
        height: 24,
    },
    headerText: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: 'bold',
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Adjust this as needed
        alignItems: 'center', // Vertically align items
        // Add padding or margin if needed
    },
    imageRow: {
        flexDirection: 'row', // Added to align images in a single line
        // You can add justifyContent and alignItems if needed
    },
    topRightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileSmall: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
    },
    sectionSeeMore: {
        fontSize: 14,
        textAlign:'right',
        
    },
    bannerSection: {
        position: 'relative',
    },
    bannerImage: {
        width: '100%',
        height: 200,
    },
    profileContainer: {
        position: 'absolute',
        bottom: -50,
        left: 135,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileLarge: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: Colors.white,
        borderWidth: 2,
    },
    profileDetails: {
        marginTop: 60,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    imageContainer: {
        alignItems: 'center', // Center the image and text
        marginRight: 5, // Optional: Add some space between each container
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.white,
    },
    imageLabel: {
        marginTop: 3, // Optional: Space between image and text
        textAlign: 'center',
        color:Colors.white,
        fontSize: 12,
        // Add more text styling as needed
    },
    profileBio: {
        textAlign: 'left',
        color: Colors.grey,
        marginTop: 10,
        fontSize: 10,
    },
    profileLink: {
        color: Colors.blue,
    },
    circleImage: {
        width: 60,
        height: 60,
        borderRadius: 30, // Updated to match half of width/height for perfect circle
        borderColor: Colors.primary,
        borderWidth: 2,
        marginRight: 10, // Optional: Add some space between images
    },
    profileButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    button: {
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    transparentButton: {
        borderColor: Colors.secondary,
        borderWidth: 1,
    },
    buttonText: {
        color: Colors.grey,
        fontSize: 12,
    },
    socialMediaIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    socialMediaSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:9,
        backgroundColor: Colors.dark.background,
        borderColor: Colors.blue, // Border color
    borderWidth: 2, // Border width
    padding: 12, // Padding inside the border
    borderRadius: 5, // Border radius
    width: '90%', // Reduced width, adjust as needed
    alignSelf: 'center', 
    },
    socialMediaItem: {
        flex: 1,
        alignItems: 'center',
    },
    socialMediaText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.white,
    },
    socialMediaSubText: {
        fontSize: 12,
        color: Colors.white,
    },
    separator: {
        width: 1,
        backgroundColor: Colors.blue,
        marginHorizontal: 10,
    },
    section: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    portfolioButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.secondary,
        marginHorizontal: 5,
    },
    selectedButton: {
        backgroundColor: Colors.blue,
    },
    selectedButtonText: {
        color: Colors.white,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'fles-start',
    },
    gridImage: {
        width: '32%',
        height: 150,
        marginVertical: 2,
        marginHorizontal:2,
    },
    
});

export default ProductionPage;
