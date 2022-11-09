import React from 'react'
import { Modal, View, Text, Button } from 'react-native';
import { styles } from './styles';

const ItemModal = ({modalVisible, selectedItem, onHandleFound, onHandleCancel, onHandleDeleteItem}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Pet Details</Text>
          <View style={styles.modalDetailContainer}>
            <View style={styles.buttonFound}>
              <Button
                title='Marcar Como Encontrado'
                color='#ffc93c'
                onPress={onHandleFound}
              />
            </View>
            <Text style={styles.modalDetailText}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedItem}>{selectedItem?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancel'
              color='#66bfbf'
              onPress={onHandleCancel}
            />
            <Button 
              title='Delete'
              color='#66bfbf'
              onPress={onHandleDeleteItem}
            />
          </View>
        </View>
    </Modal>
  )
}

export default ItemModal