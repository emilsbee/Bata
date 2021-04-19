// External imports
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


// Internal imports
import styles from './Styles'



const Header = ({animate, setModalOpen}) => {

  return (
    <View style={styles.headerView}>
      <View style={styles.headerTitleRow}>
        <Text style={styles.headerText}>
          Bata bottle
        </Text>

        <Icon 
          name="info" 
          size={28} 
          color="white" 
          style={{position: 'absolute', top: 10, right: 10}}
          onPress={() => setModalOpen(true)}
        />
      </View>
      <View style={styles.headerDescriptionRow}>
        <Text style={styles.headerDescriptionText}>
          A friendly reminder from Batavierenrace to have some water and stay hydrated!
      </Text>
      </View>
      {/* <Pressable onPress={() => animate(1)}>
            <Text>
              Anima 1
            </Text>
        </Pressable>
        <Pressable onPress={() => animate(2)}>
            <Text>
              Anim 2
            </Text>
        </Pressable>
        <Pressable onPress={() => animate(3)}>
            <Text>
              Anim 3
            </Text>
        </Pressable>
        <Pressable onPress={() => animate(4)}>
            <Text>
              Anim 4
            </Text>
        </Pressable>
        <Pressable onPress={() => animate(5)}>
            <Text>
              Anim 5
            </Text>
        </Pressable>
        <Pressable onPress={() => animate(6)}>
            <Text>
              Anim 6
            </Text>
        </Pressable> */}
    </View>
  );
};




export default Header;