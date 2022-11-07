import {View ,TextInput, Button} from 'react-native'
import {styles} from "./styles"

const Input = ({pet, handleAddPet, onHandleChange}) => {

  return (
    <View style={styles.inputContainer}> 
      <TextInput 
        style ={styles.input}
        value={pet}
        placeholder='Ingrese Mascota Perdida'
        onChangeText={onHandleChange}
      />
      <Button title='Agregar' onPress={handleAddPet} color="#66bfbf"/>
    </View>
  )
}

export default Input