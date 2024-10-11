import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={() => navigation.navigate('Cota')}>
            Adicionar lista +
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24, 
    fontWeight: '500',
    color: '#2C2652',
  },
  button: {
    borderWidth: 3,
    borderColor: '#2C2652',
    padding: 16,
    borderRadius: 10,
  }
})

export default Home;