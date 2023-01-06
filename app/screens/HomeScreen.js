import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Alert, Dimensions, ScrollView} from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

export default function HomeScreen(props) {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={styles.welcomeContainer}>
                    <AppText intendedFontSize={35} intendedColor='crimson' text="Welcome, "/>
                    <AppText intendedFontSize={35} intendedColor='grey' text="Ricky"/>
                </View>
                <View style={styles.startWorkoutContainer}>
                    <AppText intendedFontSize={20} intendedColor='lightgrey' text="You have a leg day scheduled for today"/>
                </View>
                <View style={styles.buttonsContainer}>
                    <AppButton onPress={() =>Alert.alert('Pls work properly')} textColor="white" text="View Workouts" style={styles.button}/>
                    <AppButton onPress={() =>Alert.alert('Pls work properly')} textColor="white" text="View Progress" style={[styles.button, {marginTop:Dimensions.get('window').height * 0.03}]}/>
                    <AppButton onPress={() =>Alert.alert('Pls work properly')} textColor="crimson" text="View Workouts" style={[styles.startWorkoutButton, {marginTop:Dimensions.get('window').height * 0.054}]}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'crimson',
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.06,
        borderRadius:25
    },
    buttonsContainer: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcomeContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection:'row',
        marginLeft: Dimensions.get('window').width * 0.05
    },
    startWorkoutButton: {
        justifyContent:'center',
        alignItems:'center',
        borderColor:'crimson',
        borderWidth:6,
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').width * 0.45,
        borderRadius: Dimensions.get('window').width
    },
    startWorkoutContainer: {
        height: Dimensions.get('window').height * 0.2,
        backgroundColor:'crimson'
    }
});