import React, { useState } from 'react';

import {
    View,
    Button,
    TextInput,
    StyleSheet,
    Modal
} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        //props.onDismissModel.bind(this, !props.visible)
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
        >
            <View
                style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add Something..."
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD"
                            // onPress={() => props.onAddGoal(enteredGoal)}
                            onPress={addGoalHandler}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button title="CANCEL"
                            color="red"
                            // onPress={() => props.onAddGoal(enteredGoal)}
                            onPress={props.onDismissModel.bind(this, !props.visible)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        padding: 8,
        width: '80%',
        marginBottom: 10
    },
    button:{
        width: '40%'
    }
});

export default GoalInput;