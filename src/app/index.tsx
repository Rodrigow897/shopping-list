import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddProductModal } from "../components/AddProductModal";
import CartList, { CartItemType } from "../components/cartList";
import { EditPriceModal } from "../components/EditPriceModal";
import styles from "./style";


export default function Index() {
    const [items, setItems] = useState<CartItemType[]>([
        { id: "1", name: "Apples", value: 1.5, amount: 4, isChecked: false },
        { id: "2", name: "Bananas", value: 0.75, amount: 6, isChecked: false },
        { id: "3", name: "Carrots", value: 0.5, amount: 10, isChecked: false },
    ]);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [editingItem, setEditingItem] = useState<CartItemType | null>(null);

    const handleAddItem = (name: string, amount: number) => {
        const newItem: CartItemType = {
            id: Date.now().toString(),
            name,
            amount,
            value: 0, // Default value
            isChecked: false
        };
        setItems([...items, newItem]);
    };

    const handleDeleteItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleEditPrice = (value: number) => {
        if (editingItem) {
            setItems(items.map(item =>
                item.id === editingItem.id ? { ...item, value } : item
            ));
            setEditingItem(null);
        }
    };

    const handleToggleCheck = (id: string) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, isChecked: !item.isChecked } : item
        ));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/logo-right.png')} />
                <Text style={styles.title}>Lista de compras</Text>
                <TouchableOpacity
                    activeOpacity={0.4}
                    style={styles.button}
                    onPress={() => setIsAddModalVisible(true)}
                >
                    <Text style={{ color: "white", fontSize: 25 }}>{<Ionicons name="add-outline" size={34}/>}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <CartList
                    data={items}
                    onDelete={handleDeleteItem}
                    onItemPress={setEditingItem}
                    onToggleCheck={handleToggleCheck}
                />
            </View>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>
                    Total: R${items.reduce((acc, item) => acc + (item.value * item.amount), 0).toFixed(2)}
                </Text>
            </View>

            <AddProductModal
                visible={isAddModalVisible}
                onClose={() => setIsAddModalVisible(false)}
                onAdd={handleAddItem}
            />

            <EditPriceModal
                visible={!!editingItem}
                onClose={() => setEditingItem(null)}
                onConfirm={handleEditPrice}
                itemName={editingItem?.name}
            />
        </SafeAreaView>
    )
}