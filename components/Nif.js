import React, {Component} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';

import calculaLletraNif from '../esborrar';

export default class Nif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elDNIintroduit: undefined,
      lletraDNI: undefined,
    };
  }
  guardaDNI = valor => {
    if (valor.length === 8) {
      this.setState({elDNIintroduit: valor});
      let laLletra = calculaLletraNif(valor);
      this.setState({lletraDNI: laLletra});
      Keyboard.dismiss();
      console.log("Al component fill, el dni es " + valor + " i la lletra es " + laLletra);
      this.props.tornaNif({dni: valor, lletra: laLletra}); // Ens comuniquem amb el component Pare
    }
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
          padding: 10, backgroundColor: this.props.color, borderColor: 'blue', borderWidth: 2,
        }}>
        <Text>DNI:</Text>
        <TextInput
          style={{ fontSize: 15, fontWeight: "normal", width: 200 }}
          placeholder="Escriu el dni"
          placeholderTextColor="#FF0000"
          onChangeText={this.guardaDNI}
          maxLength={8}
          keyboardType="number-pad"
          underlineColorAndroid="blue"
        />

        <Text>Lletra:</Text>
        <TextInput
          style={{ fontWeight: 'bold', fontSize: 15 }}
          placeholder=""
          placeholderTextColor="#FF0000"
          value={this.state.lletraDNI}
          editable={false}
          underlineColorAndroid="blue"
        />
      </View>
    );
  }
}
