// External imports
import React from 'react';
import { View, Text } from 'react-native';


// Internal imports
import styles from './Styles'



const TextProperty = ({ title, value, textBacgroundColor, textColor, textPadding, textBorderRadius }) => {

  return (
    <View style={styles.sectionPropertyContainer}>
      <Text style={styles.propertyTitle}>
        {title} 
      </Text>
      <Text 
        style={
          [
            styles.propertyText, 
            {
              backgroundColor: textBacgroundColor ? textBacgroundColor : 'white',
              color: textColor ? textColor : 'black',
              padding: textPadding ? textPadding : 0,
              borderRadius: textBorderRadius ? textBorderRadius : 0
            }
          ]
        }
      >
        {value}
      </Text>
     </View>
  );
};




export default TextProperty;