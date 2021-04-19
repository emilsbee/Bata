// External imports
import React from 'react';
import { View, Text, ScrollView } from 'react-native';


// Internal imports
import styles from './Styles'



const RaceStatusCodes = () => {
  return (
    <ScrollView style={styles.outerView}>
    <View style={styles.outerView}> 
        {/* YELLOW  */}
        <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle, {backgroundColor: 'yellow', color: 'black'}]}>
                Yellow
            </Text>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.descriptionText, {marginBottom: 20}]}>
                    The situation is too dangerous, the race has been temporarily suspended.
                </Text>

                {/* Yellow: On runner's route  */}
                <Text style={[styles.descriptionTextBold, {marginBottom: 11}]}>
                    On the runner's route: 
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 9}]}>
                    1. Mind your own safety. You participate at your own risk!
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 9}]}>
                    2. If you consider the situation to be unsafe; take shelter.
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 17}]}>
                    3. If you consider the situation safe (again); continue running.
                </Text>

                {/* Yellow: On car's route  */}
                <Text style={[styles.descriptionTextBold, {marginBottom: 11}]}>
                    On the car route / relay point / restart: 
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 9}]}>
                    1. Mind your own safety. You participate at your own risk!
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 9}]}>
                    2. One person should ask for information at the relay point.
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 17}]}>
                    3. Follow the instructions of the organisation.
                </Text>

                {/* Yellow: Still in Nijmegen */}
                <Text style={[styles.descriptionTextBold, {marginBottom: 11}]}>
                    If your team is still in Nijmegen:
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 9}]}>
                    1. Follow the instructions of the organisation. 
                </Text>
            </View>
        </View>
        {/* YELLOW  */}

        {/* GREEN  */}
        <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle, {backgroundColor: 'green', color: 'white'}]}>
                Green
            </Text>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.descriptionTextBold, {marginBottom: 11}]}>
                    The situation is safe again, the race will be restarted. What you need to do:
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 9}]}>
                    1. Follow  the  instructions  of  the  organisation  regarding  the  location  you  should go to.
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 9}]}>
                    2. Drive to that location.
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 17}]}>
                    3. Once you’ve arrived, follow the instructions of the organisation.
                </Text>
            </View>
        </View>
        {/* GREEN  */}

        {/* RED  */}
        <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle, {backgroundColor: 'red', color: 'white'}]}>
                Red
            </Text>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.descriptionTextBold, {marginBottom: 11}]}>
                    It’s no longer possible or desirable to finish the race. What you need to do:
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 9}]}>
                    1. Gather in Enschede.
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 9}]}>
                    2. Finish / party; the organisation decides whether and in what form these will continue.
                </Text>
                <Text style={[styles.descriptionText, {marginBottom: 17}]}>
                    3. It’s always possible to spend the night in Enschede.
                </Text>
            </View>
        </View>
    </View>
    </ScrollView>
  );
};




export default RaceStatusCodes;