// External imports
import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useState } from 'react';
import { View, Modal, Pressable, Text, Keyboard, ScrollView } from 'react-native';


// Internal imports
import styles from './Styles'
import InputView from './InputView'


const WeightHeightModal = ({ setInitLaunch }) => {
    // Local state
    const [modalOpen, setModalOpen] = useState(true)
    const [weightInput, setWeightInput] = useState("")
    const [heightInput, setHeightInput] = useState("")
    const [focusedInput, setFocusedInput] = useState("")
    
    // Easy-peasy state and actions
    const user = useStoreState(state => state.auth.user)
    const updateUser = useStoreActions(action => action.auth.updateUser)

    const onClose = () => {
        setModalOpen(false)
        setInitLaunch(false)
    }

    const saveData = () => {
        updateUser({type: 'HEIGHT', height: heightInput === "" ? 0 : heightInput})
        updateUser({type: 'WEIGHT', weight: weightInput === "" ? 0 : weightInput})
        onClose()
    }

    const onRenderOut = () => {
        if (focusedInput === "weight") {
            if (!parseInt(weightInput)) {
                setWeightInput("")
            }
        } else if (focusedInput === "height") {
            if (!parseInt(heightInput)) {
                setHeightInput("")
            }
        }
        
        setFocusedInput(false)
    } 

    const handleClickOutsideInput = () => {
        Keyboard.dismiss()
    }

    return (
        <View style={styles.centeredView}>
            
            <Modal
                animationType="slide"
                visible={modalOpen}
                style={styles.modal}
                >
                <ScrollView style={{flex: 1, backgroundColor: 'hsl(199, 65%, 50%)'}}>
                <Pressable style={styles.modalView} onPress={handleClickOutsideInput}>
                    <Text style={styles.titleText}>
                        {`Hey, ${user.firstName}!`}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {
                            `If you wish to recieve reminders to drink some water during the race, please share information about your height and weight. It will help us to make better suggestions for you!`
                        }
                    </Text>
                    
                    <View style={styles.inputViewContainer}>
                        <Text style={styles.inputViewText}>
                            Your height 
                        </Text>
                        <InputView 
                            type="height"
                            onBlur={onRenderOut}
                            setFocusedInput={setFocusedInput}
                            onChange={val => setHeightInput(val)}
                            inputValue={heightInput}
                            focusedInput={focusedInput}
                        />
                        <Text style={styles.inputViewText}>
                            cm
                        </Text>
                    </View>
                    <View style={styles.inputViewContainer}>
                        <Text style={styles.inputViewText}>
                            Your weight
                        </Text>
                        <InputView 
                            type="weight"
                            onBlur={onRenderOut}
                            setFocusedInput={setFocusedInput}
                            onChange={val => setWeightInput(val)}
                            inputValue={weightInput}
                            focusedInput={focusedInput}
                        />
                        <Text style={styles.inputViewText}>
                            kg
                        </Text>
                    </View>

                    <Pressable style={({ pressed }) => [
                            {
                                opacity: pressed 
                                    ? 0.75
                                    : 1
                            },
                            styles.buttonShadow,
                            styles.proceedButton
                        ]}
                        onPress={saveData}
                    >
                        <Text style={styles.proceedButtonText}>
                            Proceed
                        </Text>
                    </Pressable>

                    <View style={styles.skipView}>
                        <Text style={styles.skipText}>
                            No thank you, I wish to 
                        </Text>
                        <Pressable style={
                            ({ pressed }) => [
                                {
                                    opacity: pressed   
                                        ? 0.75
                                        : 1
                                },
                                styles.buttonShadow,
                                styles.skipButton
                            ]
                            }
                            onPress={onClose}
                        >
                            <Text style={styles.proceedButtonText}>
                                Skip
                            </Text>
                        </Pressable>
                    </View>
                </Pressable>
                </ScrollView>
            </Modal>
        </View>
    );
};




export default WeightHeightModal;