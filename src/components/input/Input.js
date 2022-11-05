import {View ,TextInput, Button} from 'react-native'
import {styles} from "./styles"

const Input = ({pet, handleAddPet, onHandleChange}) => {

  return (
    <View style={styles.inputContainer}> 
      <TextInput 
        style ={styles.input}
        value={pet}
        placeholder='Enter Pet'
        onChangeText={onHandleChange}
      />
      <Button title='Add' onPress={handleAddPet} color="#66bfbf"/>
    </View>
  )
}

export default Input