import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type AddProductModalProps = {
  visible: boolean;
  onClose: () => void;
  onAdd: (name: string, amount: number) => void;
};

export function AddProductModal({ visible, onClose, onAdd }: AddProductModalProps) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    if (name && amount) {
      onAdd(name, parseInt(amount, 10));
      setName('');
      setAmount('');
      onClose();
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
          <Text style={styles.modalText}>Adicionar Produto</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Nome do produto"
            value={name}
            onChangeText={setName}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Quantidade"
            value={amount}
            onChangeText={setAmount}
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
              style={[styles.button, styles.buttonAdd]}
              onPress={handleAdd}
            >
              <Text style={styles.textStyle}>Adicionar</Text>
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
    fontSize: 20,
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
  buttonAdd: {
    backgroundColor: '#00ff22',
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
