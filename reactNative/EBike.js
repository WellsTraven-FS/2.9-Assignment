import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
} from "react-native";

import styles from "./AppStyles";

export default function EBike({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.typographyHeader}>E-Bike</Text>
            <Image
                source={require("./images/bikeImage3.jpeg")}
                style={styles.img}
            />
            <Text style={styles.typography}>Speed: Electric</Text>
            <Text style={styles.typography}>Color: Astro Black</Text>

            <Button
                title="Back to Bikes"
                onPress={() => navigation.navigate("OnlineStore")}
            />
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </SafeAreaView>
    );
}
