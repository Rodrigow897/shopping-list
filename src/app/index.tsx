import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./style";


export default function Index() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/logo-right.png')}/>
                <Text style={styles.title}>Lista de compras</Text>
                <TouchableOpacity activeOpacity={0.4} style={styles.button}><Text style={{color: "white", fontSize: 25}}>+</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}