// External imports
import React from 'react';
import { View, Text, Linking, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Clipboard from '@react-native-community/clipboard';

// Internal imports
import styles from './Styles'



const LoginProblemModal = ({ problemModalOpen, setProblemModalOpen }) => {

    

    return (
        <View> 
            <Modal
                backdropTransitionOutTiming={0}
                backdropTransitionInTiming={0}
                onBackdropPress={() => setProblemModalOpen(false)}
                isVisible={problemModalOpen}
                hideModalContentWhileAnimating={true}
                style={styles.problemModal}
            >   
                <View style={styles.modalInsideView}>
                    <Text style={styles.modalText}>
                        If you're having problems logging in, please contact us at the following email
                    </Text>

                    <View style={styles.emailView}>
                        <Icon name='content-copy' size={21} color="white" style={{alignSelf: 'flex-end'}}/>
                        <Pressable
                            onPress={() => Clipboard.setString('enschede@batavierenrace.nl')}
                            style={({pressed}) => [
                                styles.emailPressable,
                                {
                                    opacity: pressed ? 0.6 : 1
                                }
                            ]}
                        >
                            <Text style={styles.modalLink}>
                                enschede@batavierenrace.nl
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.buttonView}>
                        <Pressable
                            onPress={() => Linking.openURL('mailto:enschede@batavierenrace.nl?subject=Problem logging in')}
                            style={({pressed}) => [
                                styles.modalButton,
                                {
                                    opacity: pressed ? 0.6 : 1
                                }
                            ]}
                        >
                            <Text style={styles.modalButtonText}>
                                Send email
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={() => setProblemModalOpen(false)}
                            style={({pressed}) => [
                                styles.modalButton,
                                {
                                    opacity: pressed ? 0.6 : 1
                                }
                            ]}
                        >
                        <Text style={styles.modalButtonText}>
                                Back
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};




export default LoginProblemModal;








