import React from 'react';
import { FlatList, View, Text } from 'react-native';
import {styles} from "./styles"
import ListItem from './listItem/ListItem';

const List = ({list, onHandleSelected}) => {

  const renderItem = ({item}) => (
    <ListItem item={item} onHandleSelected={onHandleSelected}/>
  )

  return (
      <FlatList 
        style={styles.listContainer}
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  )
}

export default List