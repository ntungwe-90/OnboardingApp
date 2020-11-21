import React from 'react'
import { StyleSheet,  View } from 'react-native'

export default function SidesControl() {
    return (
        <View style={styles.firstControl}></View>
    )
}

const styles = StyleSheet.create({
    firstControl: {
        backgroundColor: "lightgrey",
        height: 8,
        width: 8,
        borderRadius: 5,
      },
})