import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export type CartItemType = {
    id: string;
    name: string;
    value: number;
    amount: number;
    isChecked: boolean;
};

type CartListProps = {
    data: CartItemType[];
    onDelete: (id: string) => void;
    onItemPress: (item: CartItemType) => void;
    onToggleCheck: (id: string) => void;
};

const Item = ({ item, onDelete, onPress, onToggleCheck }: { item: CartItemType; onDelete: (id: string) => void; onPress: () => void; onToggleCheck: (id: string) => void }) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10, height: 50, alignItems: "center", backgroundColor: "#e0ffe4ff", marginBottom: 5, marginHorizontal: 10, borderRadius: 5, elevation: 2, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 2, marginTop: 10 }}>
        <TouchableOpacity style={{}} onPress={onPress}>
            <Text>{item.name} (x{item.amount})</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 10 }}>${(item.value * item.amount).toFixed(2)}</Text>
            <TouchableOpacity onPress={() => onToggleCheck(item.id)}>
                <Ionicons
                    name={item.isChecked ? "checkmark-circle" : "ellipse-outline"}
                    size={24}
                    color={item.isChecked ? "green" : "gray"}
                />
            </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Text style={{ color: "red" }}><Ionicons name="trash-outline" size={24} color="red" /></Text>
        </TouchableOpacity>
    </View>
);

export function CartList({ data, onDelete, onItemPress, onToggleCheck }: CartListProps) {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Item item={item} onDelete={onDelete} onPress={() => onItemPress(item)} onToggleCheck={onToggleCheck} />
            )}
        />
    )
}

export default CartList;