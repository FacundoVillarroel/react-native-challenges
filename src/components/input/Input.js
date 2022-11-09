import {View ,TextInput, Button} from 'react-native'
import {styles} from "./styles"

const Input = ({pet, handleAddPet, onHandleChange}) => {

  return (
    <View style={styles.inputContainer}> 
      <TextInput
        color="#fff"
        placeholderTextColor="#fff"
        cursorColor="#ff9a3c"
        style ={styles.input}
        value={pet}
        placeholder='Ingrese Mascota Perdida'
        onChangeText={onHandleChange}
      />
      <Button title='Agregar' onPress={handleAddPet} color="#ff6f3c"/>
    </View>
  )
}

export default Input