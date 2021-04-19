// External imports
import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign'

// Internal imports
import styles from './Styles'



const InfoModal = ({ setModalOpen, modalOpen }) => {

    return (
        <View> 
            <Modal
                backdropTransitionOutTiming={0}
                backdropTransitionInTiming={0}
                onBackdropPress={() => setModalOpen(false)}
                isVisible={modalOpen}
                hideModalContentWhileAnimating={true}
                style={styles.infoModal}
            >   
                <View style={styles.modalInsideView}>
                    <View style={styles.modalHeader}>
                        <View style={styles.modalHeaderTextView}>
                            <Text style={styles.modalHeaderText}>
                                How it works
                            </Text>
                        </View>
                        <Icon 
                            name='closecircle' 
                            size={27} 
                            color="white" 
                            onPress={() => setModalOpen(false)}
                            style={{
                                
                            }}
                        />
                    </View>
                    <ScrollView>
                        <Text style={styles.modalText}>
                            This feature, when enabled, will send you notifications to remind you to drink some water during your run. For this feature to work you have to:
                        </Text>
                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            1) Have entered non-zero weight and height in your profile page
                        </Text>
                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            2) Have notification permissions enabled for this app
                        </Text>
                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            Press the button "start run" to begin the notification cycle. Once you have done so, you will recieve a notification to drink every 15 minutes, so make sure that you have sound and vibration on for notifications. The amount in ml how much you should drink will be shown after the button press. A rule of thumb is that 1 sip of water is about 60ml.
                        </Text>
                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            Have fun runnning!
                        </Text>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};




export default InfoModal;