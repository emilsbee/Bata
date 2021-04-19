// External imports
import React from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  Pressable, 
  Keyboard,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {useStoreActions, useStoreState} from 'easy-peasy'


// Internal imports
import styles from './Styles'
import TextProperty from './TextProperty'
import EditableProperty from './EditableProperty'
import ActionProperty from './ActionProperty'


const Profile = ({ navigation }) => {
  // Easy-peasy state/actions
  const user = useStoreState(state => state.auth.user)
  const startLogout = useStoreActions(action => action.auth.startLogout)
  const updateUser = useStoreActions(action => action.auth.updateUser)

  const handleClickOutsideInput = () => {
    Keyboard.dismiss()
  }

  const submitHeight = (height) => {
    updateUser({type: 'HEIGHT', height})
  }

  const submitWeight = (weight) => {
    updateUser({type: 'WEIGHT', weight})
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
    
        <Pressable onPress={handleClickOutsideInput} style={styles.view}>
          <View style={styles.outerView}> 
            <View style={[styles.sectionView, {marginTop: 20}]}>
              <View style={styles.sectionTitleContainer}>
                <Icon name="user" size={24} style={{marginRight: 10}} color={'hsl(199, 65%, 50%)'}/>
                <Text style={styles.sectionTitle}>
                  Personal information
                </Text>
              </View>
              
              <TextProperty title="Name" value={`${user.firstName} ${user.lastName}`}/>

              <TextProperty title="Email" value={user.email}/>

              <TextProperty title="Runner's id" value={user.uid}/>

              <TextProperty title="Stage" value={user.stage}/>

              <TextProperty 
                title="Your run time" 
                value={user.running_time === 0 ? 
                  "You are yet to run" 
                  : 
                  `${user.running_time} min`}
              />

              <EditableProperty title="Height" unit="cm" value={user.height} onSubmit={submitHeight}/>
              <EditableProperty title="Weight" unit="kg" value={user.weight} onSubmit={submitWeight}/>
            </View>


            <View style={styles.sectionView}>
              <View style={styles.sectionTitleContainer}>
                <Icon name="team" size={24} style={{marginRight: 10}} color={'hsl(199, 65%, 50%)'}/>
                <Text style={styles.sectionTitle}>
                  Team information
                </Text>
              </View>

              <TextProperty title="Name" value={user.team_name}/>
              
              <TextProperty title="Captain" value={user.team_captain_uid === user.uid ? 'You are the captain!' : user.team_captain}/>
              
              <TextProperty title="Race status" value="Green" textBacgroundColor="green" textColor="white" textPadding={4} textBorderRadius={5}/>

              <ActionProperty navigationLink="Race-status-codes" navigation={navigation} title="View race status codes"/>
              
              <ActionProperty navigationLink="Line-up" navigation={navigation} title="View team line-up"/>
              
              <ActionProperty navigationLink="Booklet-screen" navigation={navigation} title="View participant booklet"/>
            </View>

            <Pressable 
                style={({ pressed }) => [
                  styles.changePassword,
                  {
                    opacity: pressed ? 0.5 : 1
                  }
                ]}
                onPress={() => null}
              >
                <Text style={styles.changePasswordText}>
                  Change password
                </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.changePassword,
                {
                  opacity: pressed ? 0.5 : 1,
                  backgroundColor: 'hsl(199, 65%, 50%)'
                }
              ]}
              onPress={() => startLogout()}
            >
              <Text style={styles.changePasswordText}>
                Log out
              </Text>
            </Pressable>
          </View>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
};




export default Profile;