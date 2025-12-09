import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";


export function CartList(){

type CartList = {
  id: string;
  name: string;
  value: number;
  amount: number;
};

type ItemProps = CartList & {
  onDelete: (id: string) => void;
};

const data =  [
    { id: "1", name: "Apples", value: 1.5, amount: 4 },
    { id: "2", name: "Bananas", value: 0.75, amount: 6 },
    { id: "3", name: "Carrots", value: 0.5, amount: 10 },
]

const Item = ({ id, name, value, amount, onDelete }: ItemProps) => (
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10, height: 50, alignItems: "center", backgroundColor: "#e0ffe4ff", marginBottom: 5, marginHorizontal: 10, borderRadius: 5, elevation: 2, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 2,marginTop: 10 }}>
            <TouchableOpacity style={{ }}>
                <Text>{name} (x{amount})</Text>
            </TouchableOpacity>
            <Text>${(value * amount).toFixed(2)}</Text>
            
            <TouchableOpacity onPress={() => onDelete(id)}>
            <Text style={{ color: "red" }}><Ionicons name="trash-outline" size={24} color="red" /></Text>
            </TouchableOpacity>
        </View>
);


    function onDelete(id: string): void {
        throw new Error("Function not implemented.");
    }

    return(
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Item {...item} onDelete={onDelete} />
            )}
        />
    )
}

export default CartList;