import { StyleSheet, FlatList, View } from "react-native";
import ListItem from "./ListItem";

export default function ListContainer() {
    // const DATA = fetch(
    //     "https://assignmentdeploycrudapi.herokuapp.com/api/v1/bikes"
    // )
    //     .then((res) => res.json())
    //     .then((data) => console.log({ data }));

    const DATA = [
        {
            id: "a12345",
            brand: "mongoose",
            speed: "20",
            color: "armygreen",
        },
        {
            id: "b12345",
            brand: "Trek",
            speed: "15",
            color: "Gun Metal",
        },
        {
            id: "c12345",
            brand: "E-bike",
            speed: "Electric",
            color: "Astro Black",
        },
    ];
    const renderItem = ({ item }) => (
        //
        <ListItem>{item.brand}</ListItem>
    );

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    );
}
