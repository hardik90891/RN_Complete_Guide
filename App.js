/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList
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

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  
  const [courseGoals, setCourseGoals] = useState([]);

  

  const addGoalHandler = goalTitle => {
    if (goalTitle != '') {
      setCourseGoals(curreentGoals => [...curreentGoals, {id: Math.random().toString(), value:goalTitle}]);
    }
  }

  return (
    <SafeAreaView>
    <View style={styles.screen}>
      <GoalInput 
          onAddGoal={addGoalHandler}
      />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              onDelete={() => console.log('Does that work?')}
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
