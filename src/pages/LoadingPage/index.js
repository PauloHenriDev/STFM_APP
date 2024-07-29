import { useEffect, useRef } from 'react';
import { Text, View, Image, Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const logoImg = require("../../img/logoSTFM.png");
const loadingIcon = require("../../img/loadingIcon.png");
import styles from './styles.js';

const LoadingPage = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateValue]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <LinearGradient
      colors={['#151515', '#081D22', '#000000']}
      style={styles.linearGrandient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Image source={logoImg} style={styles.staticImage} />
        <View style={styles.loading}>
          <Animated.Image source={loadingIcon} style={[styles.loadingImage, { transform: [{ rotate }] }]} />
          <Text style={styles.text}>Aguarde um momento</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoadingPage;