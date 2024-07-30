// components/CustomProfile.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './styles/Colours';

const CustomProfile = ({ onPress, title }) => {
    return (
        <View style={styles.topSection}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name="arrow-back" size={24} color={Colors.white} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.topRightIcons}>
                <Ionicons name="notifications" size={24} color={Colors.white} style={styles.icon} />
                <Ionicons name="person-circle" size={24} color={Colors.white} style={styles.profileSmall} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        fontWeight: 'bold',
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
});

export default CustomProfile;
