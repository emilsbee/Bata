// External imports
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'


// Internal imports
import styles from './Styles'



const Header = ({ connected, initLoading }) => {
    
    return (
        <View style={styles.headerContainer}>
            {!initLoading ? connected 
                ? 
                    <View style={styles.headerContainer}>
                        <FontAwesomeIcons name='user-circle-o' size={24} color={'white'} style={{marginRight: 10}}/>
                        <Text style={styles.headerText}>
                            Peter Parker
                        </Text>
                    </View>
                : 
                    <Text style={styles.headerText}>
                        Not connected
                    </Text>
            :
            <View style={styles.headerContainer}>
                <ActivityIndicator size="large" color='white' />
            </View>
            }
            
        </View>
    );
};




export default Header;