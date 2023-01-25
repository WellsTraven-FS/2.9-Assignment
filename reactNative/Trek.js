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

export default function Trek({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.typographyHeader}>Trek</Text>
            <Image
                source={require("./images/bikeImage2.jpeg")}
                style={styles.img}
            />
            <Text style={styles.typography}>Speed: 15</Text>
            <Text style={styles.typography}>Color: Gun Metal Gray</Text>

            <Button
                title="Back to Bikes"
                onPress={() => navigation.navigate("OnlineStore")}
            />

            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </SafeAreaView>
    );
}
