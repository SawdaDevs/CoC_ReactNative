import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ColourBox = ({ hexCode, colourName }) => {
  return (
    <View style={[styles.box, { backgroundColor: hexCode }]}>
      <Text style={styles.boxText}>{colourName}: {hexCode}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 5
  },
  boxText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
export default ColourBox;