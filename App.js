import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColourBox from './components/ColourBox.js';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes with different colours</Text>
        <ColourBox hexCode="#2aa198" colourName="Cyan" />
        <ColourBox hexCode="#268bd2" colourName="Blue" />
        <ColourBox hexCode="#d33682" colourName="Magenta" />
        <ColourBox hexCode="#7f61ab" colourName="Purple" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'light'
  },
})
export default App;