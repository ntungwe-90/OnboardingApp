import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button() {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        width: 120,
        backgroundColor: "#5b33b8",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 50,
      },
      buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
      },
})
