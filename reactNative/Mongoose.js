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

export default function Mongoose({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.typographyHeader}>Mongoose</Text>
            <Image
                source={require("./images/bikeImage.jpeg")}
                style={styles.img}
            />
            <Text style={styles.typography}>Speed:20</Text>
            <Text style={styles.typography}>Color: Army Green</Text>

            <Button
                title="Back to Bikes"
                onPress={() => navigation.navigate("OnlineStore")}
            />
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </SafeAreaView>
    );
}
