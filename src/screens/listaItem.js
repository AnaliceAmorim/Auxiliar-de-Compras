import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function ListaItem({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Nome</Text>
      <TextInput style={styles.input} placeholder="Ex: arroz" />

      <Text style={styles.text}>Quantidade</Text>
      <TextInput style={styles.input} placeholder="Ex: 5" />

      <View style={styles.pesoContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setIsChecked(!isChecked)}>
          {isChecked ? <View style={styles.checkedBox} /> : null}
        </TouchableOpacity>
        <Text style={[styles.text, { marginTop: 0, marginLeft: 10 }]}>Peso</Text>
        <TextInput
        style={[styles.input, { width: 120, marginLeft: 0 }]}
        placeholder="Em Kg"
        keyboardType="numeric"
      />
      </View>

      <Text style={styles.text}>Preço unitário</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: R$ 6,00"
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Lista')}>
          <Text style={styles.textBtn}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    fontSize: 16,
    margin: 12,
    padding: 10,
    height: 40,
    width: 230,
    borderWidth: 1,
    borderColor: '#2C2652',
    borderRadius: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 18,
    marginTop: 40,
    padding: 12,
    paddingHorizontal: 40,
    backgroundColor: '#2C2652',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#2C2652',
    textAlign: 'left',
    width: '55%',
    marginTop: 30,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#2C2652',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    width: 16,
    height: 16,
    backgroundColor: '#2C2652',
  },
  pesoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 146,
    marginRight: 132,
  },
});

export default ListaItem;
