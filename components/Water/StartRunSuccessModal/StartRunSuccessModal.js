// External imports
import React  from 'react';
import { View, Text, Pressable} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign'
import {openSettings} from 'react-native-permissions';

// Internal imports
import styles from './Styles'



const StartRunSuccessModal = ({setRunSuccessModalOpen, runSuccessModalOpen, waterAmount}) => {

    const closeModal = () => {
        setRunSuccessModalOpen(false)
    }
    
    return (
        <View> 
            <Modal
                backdropTransitionOutTiming={0}
                backdropTransitionInTiming={0}
                onBackdropPress={closeModal}
                isVisible={runSuccessModalOpen}
                hideModalContentWhileAnimating={true}
                style={styles.modal}
            >   
                <View style={styles.modalInsideView}>
                    <View style={styles.modalHeader}>
                        <View style={styles.modalHeaderTextView}>
                            <Text style={styles.modalHeaderText}>
                                Useful to know
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
                            {`Given the height and weight you provided, the optimal amount of water you should drink every 15 minutes, for an average jogging pace, would be ${waterAmount}ml. This would be about ${Math.round(waterAmount/60)} regular sips of water.`} 
                        </Text> 
                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            {'Remember to turn on sound and vibration for notifications to hear when the water bells ring!'}
                        </Text>
                        
                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            P.S. For the sake of demonstration, the 15 minute notification interval is cut down to 30 seconds. So water level changes every 5 seconds. 
                        </Text>

                        <Text style={[styles.modalText, {marginTop: 10}]}>
                            Have a fun run!
                        </Text>
                        <Pressable 
                            onPress={closeModal}
                            style={({pressed}) => 

                                [
                                    styles.okButton,
                                    {
                                        opacity: pressed ? 0.75 : 1
                                    }
                                ]
                            }
                        >
                            <Text style={styles.okButtonText}>
                                Continue
                            </Text>
                        </Pressable>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};




export default StartRunSuccessModal;