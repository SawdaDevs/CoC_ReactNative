import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation }) => {
  const [colorPalette, updateColorPalette] = useState([{ paletteName: "", colors:[]}]);

  const getPalettes = useCallback(() => {
    fetch("https://color-palette-api.kadikraman.now.sh/palettes").then(res => {
      res.json().then(colors => {
        console.log("colors: ", colors)
        updateColorPalette(colors)
      })
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    getPalettes();
  }, [])

  return (
    <View>
      <FlatList

        data={colorPalette}
        keyExtractor={item => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            palette={item}
            onPress={()=>navigation.push('ColorPalette', item)}
          />)}
          />
      </View>
    );
  };

export default Home;