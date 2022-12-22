import React from "react";
import {ScrollView, SafeAreaView, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import AppText from "../components/AppText";

function AllWorkoutsScreen(props) {
    const numWorkouts = 6

    const containers = []
    for (var i = 0; i < numWorkouts; i++) {
        containers.push(<TouchableOpacity key={i} style={styles.workoutContainer}></TouchableOpacity>)
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style = {styles.titleContainer}>
                <AppText intendedFontSize={48} intendedColor='red' text="All Workouts"/>
            </View>
            <ScrollView style={styles.scrollViewStyle}>
                {containers}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
    },
    workoutContainer:{
        width: Dimensions.get('window').width * (1 - 0.07),
        height: Dimensions.get('window').height * 0.2,
        marginLeft: Dimensions.get('window').width * 0.035,
        backgroundColor:'white',
        shadowOffset: {width:0,height:18},
        shadowRadius: 10,
        shadowOpacity: 0.15,
        borderRadius: 30,
        marginVertical: Dimensions.get('window').height * 0.02
    },
    titleContainer : {
        paddingLeft: Dimensions.get('window').width * 0.035
    }
})

export default AllWorkoutsScreen;