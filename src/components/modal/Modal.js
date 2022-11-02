import React from 'react'
import { Modal, View, Text, Button } from 'react-native';
import { styles } from './styles';

const ItemModal = ({modalVisible, selectedItem, onHandleCancel, onHandleDeleteItem}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Pet Details</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailText}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedItem}>{selectedItem?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancel'
              color='#f76b8a'
              onPress={onHandleCancel}
            />
            <Button 
              title='Delete'
              color='#f76b8a'
              onPress={onHandleDeleteItem}
            />
          </View>
        </View>
    </Modal>
  )
}

export default ItemModal