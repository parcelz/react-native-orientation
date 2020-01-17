import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

import Orientation from 'react-native-orientation';

export default function App() {
  const [init, setInit] = useState('');
  const [orientation, setOrientation] = useState('');
  const [specificOrientation, setSpecificOrientation] = useState('');



  useEffect(() => {
    const init = Orientation.getInitialOrientation();
    setInit(init)
  }, []);


  useEffect(() => {
    Orientation.addOrientationListener((orientation) => setOrientation(orientation));
    Orientation.addSpecificOrientationListener((specificOrientation) => setSpecificOrientation(specificOrientation));
  }, [orientation]);

  function getSpecificOrientation() {
    Orientation.getOrientation((err, orientation) => {
      Alert.alert(`Orientation is ${orientation}`);
    });
  }

  function getOrientation() {
    Orientation.getOrientation((err, orientation) => {
      Alert.alert(`Orientation is ${orientation}`);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native Orientation Demo!
        </Text>
      <Text style={styles.instructions}>
        {`Initial Orientation/Orientação inicial: ${init}`}
      </Text>
      <Text style={styles.instructions}>
        {`Current Orientation/Orientação atual: ${orientation}`}
      </Text>
      <Text style={styles.instructions}>
        {`Specific Orientation/Orientação específica: ${specificOrientation}`}
      </Text>
      <TouchableOpacity
        onPress={Orientation.unlockAllOrientations}
        style={styles.button}
      >
        <Text style={styles.instructions}>
          Unlock All Orientations
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={Orientation.lockToPortrait}
        style={styles.button}
      >
        <Text style={styles.instructions}>
          Lock To Portrait
          </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={Orientation.lockToLandscapeLeft}
          style={styles.button}
        >
          <Text style={styles.instructions}>
            Lock To Left
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Orientation.lockToLandscape}
          style={styles.button}
        >
          <Text style={styles.instructions}>
            Lock To Landscape
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Orientation.lockToLandscapeRight}
          style={styles.button}
        >
          <Text style={styles.instructions}>
            Lock To Right
            </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => getOrientation()}
          style={styles.button}
        >
          <Text style={styles.instructions}>
            Get Orientation
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => getSpecificOrientation()}
          style={styles.button}
        >
          <Text style={styles.instructions}>
            Get Specific Orientation
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 3,
    backgroundColor: 'grey',
  }
});