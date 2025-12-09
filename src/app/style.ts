import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: "center",
        flex: 1,
        backgroundColor: "#FFFFFF",   
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    },
    logo:{
        width: 50,
        height: 60
    },
    button:{
        height: 40,
        width: 40,
        borderRadius: 8,
        backgroundColor: "#00ff22",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        elevation: 5,
    },
    body:{
        height: "80%",
        width: "100%",
        marginTop: 20,
        backgroundColor: "#f8f8f8ff",
        borderRadius: 10,
    }
})

export default styles