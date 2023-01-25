import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

import styles from "./AppStyles";

export default function BikeDetails({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.typography}>Bike By Brand</Text>
            <Button
                title="Mongoose"
                onPress={() => navigation.navigate("Mongoose")}
            />
            <Button title="Trek" onPress={() => navigation.navigate("Trek")} />
            <Button
                title="EBike"
                onPress={() => navigation.navigate("EBike")}
            />
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </SafeAreaView>
    );
}
