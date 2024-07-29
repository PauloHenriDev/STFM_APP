import { TouchableOpacity, Text, View, StyleSheet, onPress } from "react-native";

const Button = ({ text }) => {
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 246,
        padding: 10,
        borderRadius: 11,
        borderWidth: 1,         // Serve para definir a largura das bordas
        borderColor: '#A99321',
    },
    buttonText: {
        color: '#A99321',
        textAlign: 'center',
    },
})

export default Button;