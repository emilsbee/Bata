// External imports
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';



// Internal imports
import styles from './Styles'



const EditableProperty = ({ title, unit, value, onSubmit }) => {
    const [focused, setFocused] = useState(false)
    const [localValue, setLocalValue] = useState(value)
    
    const onRenderOut = () => {
        if (!parseInt(localValue)) {
            setLocalValue(0)
            onSubmit(0)
        } else {
            onSubmit(localValue)
        }
        setFocused(false)
    } 

    return (
        <View style={styles.sectionPropertyContainer}>
            <Text style={styles.propertyTitle}>
                {title} 
            </Text>
            <View style={styles.propertyText}>
                <TextInput 
                    onBlur={onRenderOut}
                    onFocus={() => setFocused(true)}
                    style={[styles.propertyInput, focused && styles.selectedInput]}
                    enablesReturnKeyAutomatically
                    editable
                    maxLength={3}
                    value={localValue.toString()}
                    onChangeText={val => setLocalValue(val)}
                    keyboardType='numeric'
                />
                <Text style={{fontSize: 16}}>
                    {unit}
                </Text>
            </View>
        </View>
    );
};




export default EditableProperty;