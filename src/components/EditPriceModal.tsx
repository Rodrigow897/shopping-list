import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type EditPriceModalProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: (value: number) => void;
    itemName?: string;
};

export function EditPriceModal({ visible, onClose, onConfirm, itemName }: EditPriceModalProps) {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (visible) {
            setValue('');
        }
    }, [visible]);

    const handleConfirm = () => {
        if (value) {
            // Replace comma with dot for float parsing if user uses comma
            const parsedValue = parseFloat(value.replace(',', '.'));
            if (!isNaN(parsedValue)) {
                onConfirm(parsedValue);
                onClose();
            }
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        Adicionar valor para: {itemName}
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Valor (ex: 1.50)"
                        value={value}
                        onChangeText={setValue}
                        keyboardType="numeric"
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonCancel]}
                            onPress={onClose}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonConfirm]}
                            onPress={handleConfirm}
                        >
                            <Text style={styles.textStyle}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 15,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: '45%',
    },
    buttonConfirm: {
        backgroundColor: '#2196F3',
    },
    buttonCancel: {
        backgroundColor: '#ff5252',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
