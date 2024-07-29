import { View, Image, SafeAreaView, TextInput, onPress, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import styles from './styles.js';
import Button from '../../components/Button/index.js';
const logoImg = require("../../img/logoSTFM2.png");

const InitialPage = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <LinearGradient
            colors={['#151515', '#081D22', '#000000']}
            style={styles.linearGrandient}
            start={{ x: 0, y: 1.5 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.container}>
                <Image source={logoImg} style={styles.staticImage} />
                <View style={styles.inputWrapper}>
                    <SafeAreaView style={styles.inputBox}>
                        <TextInput
                            placeholder='Usuário'
                            onChangeText={setUser}
                            value={user}
                            style={styles.input}
                            placeholderTextColor={'#A99321'}
                        />
                    </SafeAreaView>
                    <SafeAreaView style={styles.inputBox}>
                        <TextInput
                            placeholder='Senha'
                            onChangeText={setPassword}
                            value={password}
                            style={styles.input}
                            placeholderTextColor={'#A99321'}
                        />
                    </SafeAreaView>
                </View>
                <View style={styles.buttonLogin}>
                    <Button text="Entrar" onPress={onPress} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <View style={styles.buttonFirstAcess}>
                    <Button text="Primeiro Acesso" onPress={onPress} />
                </View>
            </View>
        </LinearGradient>
    );
}

export default InitialPage;