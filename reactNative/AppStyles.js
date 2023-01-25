import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    typography: {
        color: "white",
        marginBottom: 5,
    },
    typographyHeader: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "lightblue",
    },
    img: {
        width: 400,
        height: 400,
        marginBottom: 10,
        objectFit: "contain",
        borderRadius: 20,
    },
});

export default styles;
