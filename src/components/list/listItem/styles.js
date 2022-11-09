import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical: 20,
    backgroundColor: '#ff6f3c',
    borderRadius: 5,
    shadowColor: "#212121",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
  },
  listItem: {
    fontSize: 14,
    color: '#fff',
    paddingHorizontal: 20,
  },
  listItemStatus:{
    paddingHorizontal:20
  }
});