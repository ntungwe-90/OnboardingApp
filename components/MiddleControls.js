import React from 'react'
import { StyleSheet,  View } from 'react-native'

export default function middleControl() {
    return (
        <View style={styles.middleControl}></View>
    )
}

const styles = StyleSheet.create({
    middleControl:{
    backgroundColor: "#5b33b8",
    height: 8,
    width: 25,
    borderRadius: 5,
    marginHorizontal: 2,
      },
})