import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Heading from "./components/Heading";
import styles from "./AppStyles";
import OnlineStore from "./OnlineStore";
import Mongoose from "./Mongoose";
import Trek from "./Trek";
import EBike from "./EBike";

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.typography}>Web and IOS Updated!</Text>
            <Heading>This is a Heading</Heading>
            <Button
                title="Enter Online Store"
                onPress={() => navigation.navigate("OnlineStore")}
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Bike Mobster" }}
                />
                <Stack.Screen name="OnlineStore" component={OnlineStore} />
                <Stack.Screen name="Mongoose" component={Mongoose} />
                <Stack.Screen name="Trek" component={Trek} />
                <Stack.Screen name="EBike" component={EBike} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
