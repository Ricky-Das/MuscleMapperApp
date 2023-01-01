import React from "react";
import {FlatList, SafeAreaView, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import * as SQLite from 'expo-sqlite'

import AppText from "../components/AppText";

const db = SQLite.openDatabase('todolist.db');

function AllWorkoutsScreen(props) {
    const [workout, setWorkout] = useState('');
    const [workouts, setWorkouts] = useState([]);
  
    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY NOT NULL, workoutName TEXT NOT NULL, );');
      });
      retrieveWorkouts();
    }, []);
  
    const addTodo = () => {
      db.transaction((tx) => {
        tx.executeSql('INSERT INTO todos (todo) VALUES (?)', [todo]);
      });
      retrieveTodos();
    };
  
    const retrieveTodos = () => {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM todos', [], (_, { rows }) =>
          setTodos(rows._array)
        );
      });
    };
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
            <Flatlist 
            style={styles.scrollViewStyle}
            data
            />
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