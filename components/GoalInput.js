import React, {useState} from 'react';
import type {Node} from 'react';

import {
    View,
    Button,
    TextInput,
    StyleSheet
} from 'react-native';

const GoalInput: () => Node = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View
            style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add Something..."
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD"
                // onPress={() => props.onAddGoal(enteredGoal)}
                onPress={props.onAddGoal.bind(this, enteredGoal)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        padding: 8,
        width: '80%'
    }
});

export default GoalInput;