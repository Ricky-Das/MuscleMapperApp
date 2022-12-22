import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Alert, Dimensions} from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

export default function HomeScreen(props) {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.titleContainer}>
                <AppText intendedFontSize={48} intendedColor='red' text="MuscleMapper"/>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton onPress={() =>Alert.alert('Pls work properly')} textColor="white" text="View Workouts" style={styles.button}/>
                <AppButton onPress={() =>Alert.alert('Pls work properly')} textColor="white" text="View Progress" style={[styles.button, {marginTop:Dimensions.get('window').height * 0.03}]}/>
                <AppButton onPress={() =>Alert.alert('Pls work properly')} textColor="red" text="View Workouts" style={[styles.startWorkoutButton, {marginTop:Dimensions.get('window').height * 0.054}]}/>
            </View>
            
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.06,
        borderRadius:25
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startWorkoutButton: {
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red',
        borderWidth:6,
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').width * 0.45,
        borderRadius: Dimensions.get('window').width
    }
});