import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Heading from "./Heading";

export default function App() {
    fetch("https://assignmentdeploycrudapi.herokuapp.com/api/v1/bikes")
        .then((res) => res.json())
        .then((data) => console.log({ data }));
    return (
        <SafeAreaView style={styles.container}>
            <Text>Web and IOS Update!</Text>
            <Heading>This is a Heading</Heading>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
