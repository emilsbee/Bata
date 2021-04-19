// External imports
import React, { useEffect } from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { useStoreState, useStoreActions } from 'easy-peasy'


// Internal imports
import Styles from './Styles'
import lineUp from './data'
import stagesJSON from '../../assets/stages.json'


const LineUp = ({ navigation }) => {
    const stage = useStoreState(state => state.auth.user.stage)
    const stages = useStoreState(state => state.route.stages)
    const setStages = useStoreActions(action => action.route.setStages)

    useEffect(() => {
        setStages({stages: stagesJSON})
    }, [])

    const navigateToStageDetails = (runner) => {
        let route = {
            params: {
                details: {
                    description: {}
                },
            }
        }
        
        stages.forEach(stage => {
            if (stage.description.stage === runner.stage && stage.type === 'Point') {
                route.params["coordinate"] = stage.coordinates
                route.params.details.description["distance"] = stage.description.distance
                route.params.details.description["gender"] = stage.description.gender
                route.params.details.description["info"] = stage.description.info
                route.params.details.description["stage"] = stage.description.stage
                route.params.details["name"] = stage.name
                route.params["id"] = stage.description.stage
                route.params.details.description["runner"] = `${runner.firstName} ${runner.lastName.charAt(0)}.`
            }
        })
        navigation.navigate("Stage-details", route.params)
    }
    
    return (
        <ScrollView>
            <View style={Styles.outerContainer}>
                <View style={Styles.headerContainer}>
                    <Text style={[Styles.columnTitles, {marginRight: 20}]}>
                        Stage 
                    </Text>
                    <Text style={[Styles.columnTitles, {marginLeft: 20}]}>
                        Name
                    </Text>
                </View>
                
                {lineUp.map(runner => {
                    
                    return (
                        <Pressable 
                            key={runner.runnersId}
                            style={({pressed}) => [
                                Styles.lineUpButton,
                                {
                                    opacity: pressed
                                        ? 0.8
                                        : 1
                                }
                            ]}
                            onPress={() => navigateToStageDetails(runner)}
                        >
                            {   stage !== runner.stage ?
                            <View style={Styles.lineUpButtonTextContainer}> 
                                <Text 
                                    style={Styles.lineUpStage}
                                >
                                    {runner.stage}
                                </Text>
                                <Text 
                                    style={Styles.lineUpName}
                                >
                                {`${runner.firstName} ${runner.lastName.charAt(0)}.`} 
                                </Text>
                            </View>
                            :
                            <View style={Styles.lineUpYouTextContainer}>
                                <Text 
                                    style={[Styles.lineUpYouText, {marginLeft: 40}]}
                                >
                                    {runner.stage}
                                </Text>
                                <Text style={[Styles.lineUpYouText, {marginRight: 40}]}>
                                    You
                                </Text>
                            </View>
                            }
                        </Pressable>
                    )
                })}
                
            </View>
        </ScrollView>
    );
};

export default LineUp;