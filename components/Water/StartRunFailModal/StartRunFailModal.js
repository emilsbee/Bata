// External imports
import React  from 'react';
import { View, Text, Pressable} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign'
import {openSettings} from 'react-native-permissions';

// Internal imports
import styles from './Styles'



const StartRunFailModal = ({ setRunFailModalOpen, runFailModalOpen, navigation }) => {
    const goToProfile = () => {
        setRunFailModalOpen(false)
        navigation.navigate('Profile')
    }

    const goToSettings = () => {
        setRunFailModalOpen(false)
        openSettings().catch(() => console.warn('cannot open settings'));
    }

    const closeModal = () => {
        setRunFailModalOpen(false)
    }

    return (
        <View> 
            <Modal
                backdropTransitionOutTiming={0}
                backdropTransitionInTiming={0}
                onBackdropPress={closeModal}
                isVisible={runFailModalOpen}
                hideModalContentWhileAnimating={true}
                style={styles.modal}
            >   
                <View style={styles.modalInsideView}>
                    <View style={styles.modalHeader}>
                        <View style={styles.modalHeaderTextView}>
                            <Text style={styles.modalHeaderText}>
                                Something went wrong...
                            </Text>
                        </View>
                        <Icon 
                            name='closecircle' 
                            size={27} 
                            color="white" 
                            onPress={closeModal}
                            style={{
                                
                            }}
                        />
                    </View>
                    <ScrollView>
                        <Text style={styles.modalText}>
                            Seems like you haven't checked all of the requirements necessary for this feature. Make sure you have done the following:
                        </Text>
                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            1) Have entered non-zero weight and height in your profile page
                        </Text>
                        <Pressable
                            style={({pressed}) => [
                                styles.profileButton,
                                {
                                    opacity: pressed ? 0.75 : 1
                                }
                            ]}
                            onPress={goToProfile}
                        >
                            <Text style={styles.buttonText}>
                                Go to profile page
                            </Text>
                        </Pressable>
                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            2) Have notification permissions enabled for this app
                        </Text>
                        <Pressable
                            style={({pressed}) => [
                                styles.profileButton,
                                {
                                    opacity: pressed ? 0.75 : 1
                                }
                            ]}
                            onPress={goToSettings}
                        >
                            <Text style={styles.buttonText}>
                                Go to settings
                            </Text>
                        </Pressable>
                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            As always with technology, restarting the app after changing any settings is always a good idea!
                        </Text>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};




export default StartRunFailModal;