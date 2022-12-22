import React from "react";
import {Scrollview, SafeAreaView, View, StyleSheet, Dimensions} from "react-native";

import AppText from "../components/AppText";

function ProgressScreen(props) {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style = {styles.titleContainer}>
                <AppText intendedFontSize={48} intendedColor='red' text="Insights"/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleContainer : {
        paddingLeft: Dimensions.get('window').width * 0.035
    }
})

export default ProgressScreen;