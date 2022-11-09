import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {styles} from './styles';
import { useState } from 'react';
import { Input, List, ItemModal } from "./components/index";

export default function App() {

  const [pet, setPet] = useState('');
  const [petList, setPetList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onHandleChange = (text) => {
    setPet(text)
  }

  const handleAddPet = () => {
    setPetList((prevList) => [...prevList,{id: Math.random().toString(), value: pet, isLost:true}])
    setPet('');
  }

  const onHandleSelected = (item) => {
    setSelectedItem(item)
    setModalVisible(!modalVisible)
  }

  const onHandleCancel = () => {
    setModalVisible(!modalVisible)
  }

  const onHandleDeleteItem = () => {
    setPetList((prevItemList) => prevItemList.filter((item) => item.id !== selectedItem.id))
    setModalVisible(!modalVisible)
  }

  const onHandleFound = () => {
    setPetList(
      petList.map(pet => {
        if (pet.id === selectedItem.id) pet.isLost = false;
        return pet
        })
      )
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <Input pet={pet} handleAddPet={handleAddPet} onHandleChange={onHandleChange}/>
        <List list={petList} onHandleSelected={onHandleSelected}/>
      <StatusBar style="auto" />
      <ItemModal 
        modalVisible={modalVisible} 
        selectedItem={selectedItem}
        onHandleFound={onHandleFound}
        onHandleCancel={onHandleCancel}
        onHandleDeleteItem={onHandleDeleteItem}
      />
    </View>
  );
}
