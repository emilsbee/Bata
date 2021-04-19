// External imports
import React from 'react';
import { View, Text } from 'react-native';


// Internal imports



const LandscapeError = () => {

  return (
    <View style={{alignItems: 'center', justifyContent: "center", flex: 1}}> 
        <Text style={{fontSize: 19}}>
          Sorry, this feature hasn't yet been developed for landscape mode :(
        </Text>
      </View>
  );
};




export default LandscapeError;