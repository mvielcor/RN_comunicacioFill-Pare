/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Nif from './components/Nif'; //Importem el component NIF des de la ruta indicada

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // Aquesta funció es defineix al component pare,
  // i és la que utilitza el component fill
  // per a passar-li dades al component pare.
  getNifILletra=({dni,lletra})=>{  // El component fill li passa el dni i la lletra al component pare.
    console.log("Estic al component Pare!")
    console.log(dni+"-"+lletra);
    this.setState({dni:dni, lletra:lletra}); // El component pare guarda al seu estat el dni i la lletra que li ha passat el component fill
  };

  render() {
    return (
      <View style={{borderColor:'green', borderWidth:4,}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign:'center'}}>Formulari Dades Usuari:</Text>
        <Nif tornaNif={this.getNifILletra} color='white'> </Nif>
        <Text>
          {/* Mostrem al component pare, les dades rebudes del component fill */}
          He rebut del component fill:{' '}
          {this.state.dni !== undefined
            ? this.state.dni + '-' + this.state.lletra
            : '-'}
        </Text>
      </View>
    );
  }
}

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
