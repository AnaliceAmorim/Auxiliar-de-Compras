import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Preload = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1, 
        duration: 1000, 
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.replace('Home');
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/LogoAuxCompras.png')}
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 300,
  },
});

export default Preload;
