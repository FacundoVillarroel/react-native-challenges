import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {styles} from './styles';
import Input from './components/input/Input';
import { useState } from 'react';
import List from './components/list/List';

export default function App() {

  const [pet, setPet] = useState('');
  const [petList, setPetList] = useState([]);

  const onHandleChange = (text) => {
    setPet(text)
  }

  const handleAddPet = () => {
    setPetList((prevList) => [...prevList,{id: Math.random().toString(), value: pet}])
    setPet('');
  }

  return (
    <View style={styles.container}>
      <Input pet={pet} handleAddPet={handleAddPet} onHandleChange={onHandleChange}/>
        <List list={petList}/>
      <StatusBar style="auto" />
    </View>
  );
}
