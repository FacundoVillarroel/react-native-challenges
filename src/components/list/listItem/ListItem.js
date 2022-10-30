import React from 'react';
import { TouchableOpacity, Text} from 'react-native'
import { styles } from './styles';

const ListItem = ({item, onHandleSelected}) => {
    return (
        <TouchableOpacity style={styles.listItemContainer} onPress={() => onHandleSelected(item)}>
            <Text style={styles.listItem}>{item.value}</Text>
        </TouchableOpacity>
    )
}

export default ListItem;