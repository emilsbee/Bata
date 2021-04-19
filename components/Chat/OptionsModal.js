// External imports
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons'


// Internal imports
import styles from './Styles'



const OptionsModal = ({ modalOpen, setModalOpen, onLocationPress }) => {

    const onLocationButtonPress = () => {
        setModalOpen(false)
        onLocationPress()
    }

    return (
        <View>
            <Modal
                backdropTransitionOutTiming={0}
                onBackdropPress={() => setModalOpen(false)}
                isVisible={modalOpen}
                hideModalContentWhileAnimating={true}
                style={styles.modal}
                backdropOpacity={0.2}
            >
            {/* Option button: share my location */}
            <Pressable 
                    onPress={onLocationButtonPress}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'rgb(240,240,240)'
                                : 'white'
                        },
                        styles.optionButton
                    ]}
                >   
                    <Icon name="location-outline" size={26} color="hsl(199, 65%, 50%)" style={{marginLeft: 15}}/>
                    <Text style={styles.optionText}>Share my location</Text>
            </Pressable>

            {/* Cancel button */}
            <Pressable 
                style={
                    ({ pressed }) => [
                        styles.innerViewMainCancel,
                        {
                            backgroundColor: pressed
                                ? 'rgb(240,240,240)'
                                : 'white'
                        }       
                    ]
                }
                onPress={() => setModalOpen(false)}
            >
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
            </Modal>
        </View>
    );
};




export default OptionsModal;