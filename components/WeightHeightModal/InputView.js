// External imports
import React from 'react';
import { View, TextInput } from 'react-native';


// Internal imports
import styles from './Styles'



const InputView = ({ type, onBlur, setFocusedInput, focusedInput, inputValue, onChange}) => {
  return (
    <View style={styles.inputView}>
        <TextInput 
            onBlur={onBlur}
            onFocus={() => setFocusedInput(type)}
            style={[styles.propertyInput, focusedInput === type && styles.selectedInput]}
            enablesReturnKeyAutomatically
            editable
            maxLength={3}
            value={inputValue.toString()}
            onChangeText={onChange}
            keyboardType='numeric'
        />
        </View>
  );
};




export default InputView;