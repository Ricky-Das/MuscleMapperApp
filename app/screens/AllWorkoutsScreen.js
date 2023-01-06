import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('workouts.db');

const WorkoutsScreen = () => {
  const [mode, setMode] = useState('list');
  const [workoutName, setWorkoutName] = useState('');
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [exerciseList, setExerciseList] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS workouts (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, exerciseList TEXT NOT NULL);',
      );
    });
    retrieveWorkouts();
  }, []);

  const addExercise = () => {
    setExerciseList([...exerciseList, { exercise, sets }]);
    setExercise('');
    setSets('');
  };

  const addWorkout = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO workouts (name, exerciseList) VALUES (?, ?)',
        [workoutName, JSON.stringify(exerciseList)]
      );
    });
    setWorkoutName('');
    setExerciseList([]);
    setMode('list');
    retrieveWorkouts();
  };

  const deleteWorkout = (id) => {
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM workouts WHERE id = ?', [id]);
    });
    retrieveWorkouts();
  };

  const retrieveWorkouts = () => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM workouts', [], (_, { rows }) => {
        console.log(rows._array);
        setWorkouts(rows._array);
      });
    });
  };

  const addTestWorkout = () => {
    console.log(db);
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO workouts (name, exerciseList) VALUES (?, ?)',
          ['Test Workout', '[{"exercise":"Pushups","sets":10}, {"exercise":"Squats","sets":5}]'],
          (_, result) => {
            console.log(result);
            console.log("executeSql successfully executed.")
          }
        );
      }, null, null, (error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
    retrieveWorkouts();
  }; 

  const deleteAllWorkouts = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM workouts',
          [],
        );
      });
    } catch (error) {
      console.log(error);
    }
    retrieveWorkouts();
  };

  if (mode === 'list') {
    return (
      <SafeAreaView style={{flex:1}}>
        <Button title="Add Test Workout" onPress={addTestWorkout} />
        <Button title="Add Workout" onPress={() => setMode('add')} />
        <Button title="Delete All Workouts" onPress={deleteAllWorkouts} />
        <FlatList
          data={workouts}
          renderItem={({ item }) => (
          <View style={styles.workoutContainer}>
            <Text style={{fontWeight:"bold"}}>{item.name}</Text>
            <FlatList
                data={JSON.parse(item.exerciseList)}
                renderItem={({ item }) => (
                  <View>
                    <Text>{item.exercise}: {item.sets} sets</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />


            <Button title="Delete" onPress={() => deleteWorkout(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
} else {
  return (
    <SafeAreaView style={{flex:1}}>
      <TextInput
        placeholder="Enter workout name"
        value={workoutName}
        onChangeText={(text) => setWorkoutName(text)}
      />
      <TextInput
        placeholder="Enter exercise"
        value={exercise}
        onChangeText={(text) => setExercise(text)}
      />
      <TextInput
        placeholder="Enter sets"
        value={sets}
        onChangeText={(text) => setSets(text)}
      />
      <Button title="Add Exercise to Workout" onPress={addExercise} />
      <FlatList
        data={exerciseList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.exercise}</Text>
            <Text>{item.sets}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Back" onPress={() => setMode('list')} />
      <Button title="Add Workout to Workouts" onPress={addWorkout} />
    </SafeAreaView>
  );
}
};

export default WorkoutsScreen;

const styles = StyleSheet.create({
  workoutContainer: {
    backgroundColor:'white',
    borderRadius:32,
    paddingVertical:15,
    marginVertical:5
  }
})