import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#161A30"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    logo: {
        width: 50,
        height: 60
    },
    button: {
        height: 40,
        width: 40,
    },
    body: {
        height: "80%",
        width: "100%",
        marginTop: 20,
        backgroundColor: "#f8f8f8ff",
        borderRadius: 10,
    },
    totalContainer: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "#e0ffe4ff",
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    totalText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    }
})

export default styles