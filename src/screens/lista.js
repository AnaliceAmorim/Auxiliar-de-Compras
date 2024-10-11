import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function Lista ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.text}>
    <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Cota: R$ 250,00</Text>
    <Text>Isso vai ser um item de lista</Text>
    <Text>Isso vai ser outro item</Text>
    <Text>E isso outro item</Text>
    </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 20,
    fontWeight: 'semi-bold',
    color: 'black'
  }
})

export default Lista;