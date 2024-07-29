import { View, Text, StyleSheet, Image, onPress } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/Button/index.js';

const logoImg = require("../../img/logoSTFM.png");
import styles from './styles.js';


const InitialPage = () => {
    return (
        <LinearGradient
        colors={['#151515', '#081D22', '#000000']}
        style={styles.linearGrandient}
        start={{ x: 0, y: 1.5 }}
        end={{ x: 1, y: 1 }}
        >
            <View style={styles.container}>
                <Image source={logoImg} style={styles.staticImage} />
                <View style={styles.buttonContainer}>
                    <Button text="Entrar" onPress={onPress} />
                    <Button text="Entrar" onPress={onPress} />
                </View>
            </View>
        </LinearGradient>
    );
}

export default InitialPage;