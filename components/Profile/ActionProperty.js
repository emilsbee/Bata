// External imports
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

// Internal imports
import styles from './Styles'



const ActionProperty = ({ navigationLink, navigation, title }) => {
  return (
    <TouchableOpacity 
        style={styles.sectionActionContainer}
        onPress={() => navigation.navigate(navigationLink)}
    >
        <Text style={styles.actionTitle}>
            {title}
        </Text>
        <Icon name="right" size={18} style={{marginRight: 20}}/>
    </TouchableOpacity>
  );
};




export default ActionProperty;