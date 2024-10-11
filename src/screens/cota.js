import React from 'react';
import {
  SafeAreaView,
  Image,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Cota({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Defina sua cota:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: R$250,00"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={() => navigation.navigate('ListaItem')}>
        <Image
          source={require('../assets/arrow.png')}
          style={{ height: 80, width: 80, resizeMode: 'contain' }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: '#2C2652',
  },
  input: {
    height: 50,
    width: 230,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#2C2652',
    padding: 16,
    margin: 40,
  },
});

export default Cota;
