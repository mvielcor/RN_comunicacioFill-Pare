/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import calculaLletraNif, { hola } from './esborrar';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elDNIintroduit: undefined,
      lletra:undefined,
    }
  }

  guardaDNI(valor) {
    if (valor.length === 8) {
      this.setState({ elDNIintroduit: valor })
      let lalletra = calculaLletraNif(parseInt(valor));
      this.setState({ lletra: lalletra })
    }
  }

  render() {
    return (
      <View>
        <TextInput style={{ underlineColorAndroid: 'blue', borderWidth: 2 }}
          placeholder='DNI'
          placeholderTextColor='#FF0000'
          maxLength={8}
          keyboardType='number-pad'
          onChangeText={(text) => this.guardaDNI(text)}
        >
        </TextInput>
        <TextInput style={{ underlineColorAndroid: 'blue', borderWidth: 2 }}
          placeholder='LLETRA'
          placeholderTextColor='#FF0000'
          editable={false}
          value={this.state.lletra}
        >
        </TextInput>
      </View >
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


