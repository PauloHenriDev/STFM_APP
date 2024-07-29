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

// const styles = StyleSheet.create({
//     linearGrandient: {
//         height: '100%',
//     },
//     container: {
//         alignItems: 'center',
//     },
//     staticImage: {
//         marginTop: 55,
//     },
//     buttonContainer: {
//         marginTop: 81.69,
//         gap: 40,
//     },
//     button: {
//         width: 246,
//         padding: 10,
//         borderRadius: 11,
//         borderWidth: 1,         // Serve para definir a largura das bordas
//         borderColor: '#A99321',
//     },
//     buttonText: {
//         color: '#A99321',
//         textAlign: 'center',
//     },
// })

export default InitialPage;