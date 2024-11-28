import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function SettingsScreen (){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This is Settings Screen !</Text>
            <Link href="/about" style={styles.button}>Go to About Page</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text : {
        color: '#fff',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
})


