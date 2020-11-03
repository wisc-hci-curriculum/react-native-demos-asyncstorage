import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
// import { AsyncStorage } from '@react-native-community/async-storage'

// This example is based on code from https://www.tutorialspoint.com/react_native/react_native_asyncstorage.htm

class AsyncStorageExample extends Component {
    state = {
        'entry': ''
    }
    componentDidMount = () => AsyncStorage.getItem('entry').then((value) => this.setState({ 'entry': value }))

    saveToMemory = (value) => {
        AsyncStorage.setItem('entry', value);
        this.setState({ 'entry': value });
    }

    resetMemory = () => {
        this.setState({ 'entry': '' });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} autoCapitalize='none'
                    onChangeText={this.saveToMemory} />
                <Text>
                    Retrieved from memory: {this.state.entry}
                </Text>
                <TouchableOpacity onPress={this.resetMemory} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default AsyncStorageExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    textInput: {
        margin: 20,
        height: 40,
        borderWidth: 0,
        width: 200,
        backgroundColor: "#e6eef0"
    },
    appButtonContainer: {
        marginTop: 20,
        elevation: 8,
        backgroundColor: "#e6eef0",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#6a8194",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})