/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  console.log(courseGoals);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0){
      return;
    }

    setCourseGoals(curreentGoals => [
      ...curreentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);

    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(curreentGoals => {
      return curreentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const dismissModel = status => {
    setIsAddMode(status)
  }

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onDismissModel={dismissModel}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },

});

export default App;
