import React from 'react';
import { TouchableOpacity, Text} from 'react-native'
import { styles } from './styles';

const ListItem = ({item, onHandleSelected}) => {

    const status = (item.status === "lost") ? "Perdido" : "Encontrado";

    return (
        <TouchableOpacity style={styles.listItemContainer} onPress={() => onHandleSelected(item)}>
            <Text style={styles.listItem}>{item.value}</Text>
            <Text style={styles.listItemStatus}>{status}</Text>
        </TouchableOpacity>
    )
}

export default ListItem;